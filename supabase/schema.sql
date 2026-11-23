-- =====================================================================
-- Poo-riend · Supabase backend
-- Supabase 대시보드 → SQL Editor → New query → 이 파일 전체 붙여넣기 → Run
-- 여러 번 실행해도 안전함 (있으면 건너뜀 / 함수는 덮어씀)
-- =====================================================================

-- ---------- tables ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade
);
alter table public.profiles add column if not exists nickname text;
alter table public.profiles add column if not exists poo jsonb not null default '{"shape":"classic","thick":1,"hat":"none"}'::jsonb;
alter table public.profiles alter column poo set default '{"shape":"classic","thick":1,"hat":"none"}'::jsonb;
-- people who never dressed up their poo: take the old default beanie off
update public.profiles set poo = '{"shape":"classic","thick":1,"hat":"none"}'::jsonb where poo = '{"shape":"classic","thick":1,"hat":"beanie"}'::jsonb;
alter table public.profiles add column if not exists best integer not null default 0;
alter table public.profiles add column if not exists last_knock integer;
alter table public.profiles add column if not exists created_at timestamptz not null default now();

create table if not exists public.pr_rooms (
  id text primary key,
  name text not null,
  code text unique not null,
  owner_id uuid not null,
  hue integer,
  door text not null default 'plain',
  created bigint not null
);
create table if not exists public.pr_members (
  room_id text not null references public.pr_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined bigint not null,
  primary key (room_id, user_id)
);
create index if not exists pr_members_user on public.pr_members(user_id);
create table if not exists public.pr_active (
  room_id text not null references public.pr_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  stall integer not null,
  started bigint not null,
  mode text not null,
  push integer not null default 0,
  cheers integer not null default 0,
  knocks integer not null default 0,
  relieved boolean not null default false,
  primary key (room_id, user_id)
);
create table if not exists public.pr_records (
  id bigserial primary key,
  room_id text not null references public.pr_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  start bigint not null,
  ended bigint not null,
  seconds integer not null,
  kind text not null
);
create index if not exists pr_records_room on public.pr_records(room_id, start);
create table if not exists public.pr_notes (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null,
  vars jsonb not null default '{}'::jsonb,
  at bigint not null,
  read boolean not null default false
);
create index if not exists pr_notes_user on public.pr_notes(user_id, at);
-- realtime mailbox: one row per event per user, the browser listens to its own rows
create table if not exists public.pr_events (
  id bigserial primary key,
  user_id uuid not null,
  event text not null,
  data jsonb not null default '{}'::jsonb,
  at timestamptz not null default now()
);
create index if not exists pr_events_at on public.pr_events(at);

-- ---------- security: nobody touches the tables directly, everything goes through poo_api() ----------
alter table public.pr_rooms   enable row level security;
alter table public.pr_members enable row level security;
alter table public.pr_active  enable row level security;
alter table public.pr_records enable row level security;
alter table public.pr_notes   enable row level security;
alter table public.pr_events  enable row level security;
alter table public.profiles   enable row level security;
drop policy if exists "own events" on public.pr_events;
create policy "own events" on public.pr_events for select to authenticated using (user_id = auth.uid());
drop policy if exists "own profile read" on public.profiles;
create policy "own profile read" on public.profiles for select to authenticated using (id = auth.uid());

do $$ begin
  alter publication supabase_realtime add table public.pr_events;
exception when others then null;   -- already added
end $$;

-- ---------- helpers ----------
create or replace function public.pr_now() returns bigint language sql volatile as
$$ select (extract(epoch from clock_timestamp()) * 1000)::bigint $$;

create or replace function public.pr_clean(s text, n integer) returns text language sql immutable as
$$ select left(btrim(regexp_replace(coalesce(s, ''), '[\x00-\x1f\x7f<>]', '', 'g')), n) $$;

create or replace function public.pr_err(code text, status integer) returns jsonb language sql immutable as
$$ select jsonb_build_object('error', code, 'status', status) $$;

create or replace function public.pr_emit(uids uuid[], ev text, d jsonb) returns void
language sql security definer set search_path = public as
$$ insert into pr_events(user_id, event, data) select distinct u, ev, coalesce(d, '{}'::jsonb) from unnest(uids) u $$;

create or replace function public.pr_member_ids(rid text) returns uuid[]
language sql stable security definer set search_path = public as
$$ select coalesce(array_agg(user_id order by joined), '{}') from pr_members where room_id = rid $$;

create or replace function public.pr_sync(rid text) returns void
language sql security definer set search_path = public as
$$ select pr_emit(pr_member_ids(rid), 'sync', jsonb_build_object('room', rid)) $$;

create or replace function public.pr_note(uids uuid[], k text, v jsonb, fx text) returns void
language plpgsql security definer set search_path = public as $$
declare u uuid; nid bigint; t bigint := pr_now();
begin
  foreach u in array coalesce(uids, '{}') loop
    insert into pr_notes(user_id, key, vars, at) values (u, k, coalesce(v, '{}'), t) returning id into nid;
    perform pr_emit(array[u], 'note', jsonb_build_object('id', nid, 'key', k, 'vars', coalesce(v, '{}'), 'fx', coalesce(fx, ''), 'at', t));
  end loop;
end $$;

create or replace function public.pr_new_code() returns text
language plpgsql security definer set search_path = public as $$
declare a text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; c text; i int;
begin
  loop
    c := 'POO-';
    for i in 1..4 loop c := c || substr(a, 1 + floor(random() * length(a))::int, 1); end loop;
    exit when not exists (select 1 from pr_rooms where code = c);
  end loop;
  return c;
end $$;

create or replace function public.pr_clean_poo(p jsonb) returns jsonb language plpgsql immutable as $$
declare th int; f text; out jsonb; dflt jsonb := '{"shape":"classic","hat":"none","door":"plain","prop":"none","acc":"none","toilet":"basic"}';
begin
  p := coalesce(p, '{}');
  th := case when jsonb_typeof(p->'thick') = 'number' then (p->>'thick')::numeric::int else 1 end;
  if th < 0 or th > 3 then th := 1; end if;
  out := jsonb_build_object('thick', th);
  -- option ids are short lowercase words; the app ignores anything it does not know
  foreach f in array array['shape','hat','door','prop','acc','toilet'] loop
    out := out || jsonb_build_object(f, case when coalesce(p->>f, '') ~ '^[a-z]{1,20}$' then p->>f else dflt->>f end);
  end loop;
  return out;
end $$;

-- full app state for one user (same shape the old Node server returned)
create or replace function public.pr_state(uid uuid) returns jsonb
language plpgsql security definer set search_path = public as $$
declare since bigint := pr_now() - 400::bigint * 86400000; res jsonb;
begin
  select jsonb_build_object(
    'user', jsonb_build_object('id', p.id, 'name', coalesce(p.nickname, ''), 'email', coalesce(au.email, ''),
                               'handle', '', 'kind', 'user', 'poo', p.poo, 'best', p.best),
    'rooms', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', r.id, 'name', r.name, 'code', r.code, 'ownerId', r.owner_id, 'hue', r.hue, 'door', r.door, 'demo', false,
        'members', coalesce((select jsonb_agg(jsonb_build_object('id', m2.user_id, 'name', coalesce(p2.nickname, ''), 'poo', p2.poo, 'bot', false) order by m2.joined)
                             from pr_members m2 left join profiles p2 on p2.id = m2.user_id where m2.room_id = r.id), '[]'),
        'sessions', coalesce((select jsonb_agg(jsonb_build_object('userId', a.user_id, 'stall', a.stall, 'startedAt', a.started, 'mode', a.mode,
                               'push', a.push, 'cheers', a.cheers, 'knocks', a.knocks, 'relieved', a.relieved))
                             from pr_active a where a.room_id = r.id), '[]'),
        'records', coalesce((select jsonb_agg(jsonb_build_object('userId', x.user_id, 'start', x.start, 'end', x.ended, 'seconds', x.seconds, 'kind', x.kind) order by x.start)
                             from pr_records x where x.room_id = r.id and x.start > since), '[]')
      ) order by m.joined)
      from pr_members m join pr_rooms r on r.id = m.room_id where m.user_id = uid), '[]'),
    'notifications', coalesce((
      select jsonb_agg(jsonb_build_object('id', n.id, 'key', n.key, 'vars', n.vars, 'at', n.at, 'read', n.read) order by n.at desc)
      from (select * from pr_notes where user_id = uid order by at desc limit 50) n), '[]'),
    'pushGoal', 10,
    'serverTime', pr_now())
  into res
  from profiles p left join auth.users au on au.id = p.id
  where p.id = uid;
  return res;
end $$;

create or replace function public.pr_add_push(rid text, uid uuid, n int) returns pr_active
language plpgsql security definer set search_path = public as $$
declare s pr_active; nm text; rn text; np int; goal int := 10;
begin
  select * into s from pr_active where room_id = rid and user_id = uid;
  if not found then return null; end if;
  if s.mode not in ('hard', 'loose') or s.relieved then return s; end if;
  np := least(goal, s.push + n);
  update pr_active set push = np, relieved = (np >= goal) where room_id = rid and user_id = uid returning * into s;
  if s.relieved then
    select nickname into nm from profiles where id = uid;
    select name into rn from pr_rooms where id = rid;
    perform pr_note(pr_member_ids(rid), case when s.mode = 'loose' then 'n.relievedLoose' else 'n.relieved' end,
                    jsonb_build_object('name', nm, 'room', rn), 'relief');
  end if;
  return s;
end $$;

create or replace function public.pr_leave(rid text, uid uuid) returns void
language plpgsql security definer set search_path = public as $$
declare ids uuid[] := pr_member_ids(rid); r pr_rooms; nxt uuid;
begin
  select * into r from pr_rooms where id = rid;
  if not found then return; end if;
  delete from pr_active where room_id = rid and user_id = uid;
  delete from pr_records where room_id = rid and user_id = uid;
  delete from pr_members where room_id = rid and user_id = uid;
  select user_id into nxt from pr_members where room_id = rid order by joined limit 1;
  if nxt is null then
    delete from pr_rooms where id = rid;
  elsif r.owner_id = uid then
    update pr_rooms set owner_id = nxt where id = rid;
  end if;
  perform pr_emit(ids, 'sync', jsonb_build_object('room', rid));
end $$;

-- ---------- the one entry point: same routes as the old /api server ----------
create or replace function public.poo_api(p_method text, p_path text, p_body jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  me uuid := auth.uid();
  b jsonb := coalesce(p_body, '{}');
  my_name text;
  mm text[];
  rid text; act text; rm pr_rooms; own boolean;
  v_name text; v_code text; v_mode text; v_target uuid; v_n int; v_msg int; v_hue int;
  s pr_active; secs int; t bigint; others uuid[]; ids uuid[];
begin
  if me is null then return pr_err('login', 401); end if;

  -- first call after sign-up: make the profile from the nickname given at sign-up
  insert into profiles(id, nickname)
  select me, coalesce(nullif(pr_clean(u.raw_user_meta_data->>'name', 10), ''), split_part(u.email, '@', 1))
  from auth.users u where u.id = me
  on conflict (id) do nothing;
  update profiles p set nickname = coalesce(nullif(pr_clean(u.raw_user_meta_data->>'name', 10), ''), split_part(u.email, '@', 1))
  from auth.users u where p.id = me and u.id = me and (p.nickname is null or p.nickname = '');
  select nickname into my_name from profiles where id = me;

  -- housekeeping (cheap): a stall left open for 3h becomes a 10 min visit; old realtime rows go
  t := pr_now();
  for s in select * from pr_active where started < t - 3 * 3600000 loop
    delete from pr_active where room_id = s.room_id and user_id = s.user_id;
    insert into pr_records(room_id, user_id, start, ended, seconds, kind) values (s.room_id, s.user_id, s.started, s.started + 600000, 600, s.mode);
    perform pr_sync(s.room_id);
  end loop;
  delete from pr_events where at < now() - interval '10 minutes';

  -- ---- me ----
  if p_path = '/api/state' then
    delete from pr_notes where user_id = me and id not in (select id from pr_notes where user_id = me order by at desc limit 50);
    return pr_state(me);
  end if;
  if p_path = '/api/me/poo' and p_method = 'PUT' then
    update profiles set poo = pr_clean_poo(b) where id = me;
    for rid in select room_id from pr_members where user_id = me loop perform pr_sync(rid); end loop;
    return jsonb_build_object('ok', true);
  end if;
  if p_path = '/api/me/name' and p_method = 'PUT' then
    v_name := pr_clean(b->>'name', 10);
    if v_name = '' then return pr_err('bad_name', 400); end if;
    if exists (select 1 from profiles where lower(nickname) = lower(v_name) and id <> me)
       or exists (select 1 from auth.users u where u.id <> me and lower(pr_clean(u.raw_user_meta_data->>'name', 10)) = lower(v_name)
                  and not exists (select 1 from profiles p where p.id = u.id)) then
      return pr_err('nick_taken', 409);
    end if;
    update profiles set nickname = v_name where id = me;
    for rid in select room_id from pr_members where user_id = me loop perform pr_sync(rid); end loop;
    return jsonb_build_object('ok', true);
  end if;
  if p_path = '/api/me/best' and p_method = 'PUT' then
    v_n := greatest(0, least(10000000, coalesce((b->>'score')::numeric::int, 0)));
    update profiles set best = greatest(best, v_n) where id = me;
    return jsonb_build_object('best', (select best from profiles where id = me));
  end if;
  if p_path = '/api/me' and p_method = 'DELETE' then
    for rid in select room_id from pr_members where user_id = me loop perform pr_leave(rid, me); end loop;
    delete from pr_notes where user_id = me;
    delete from profiles where id = me;
    begin delete from auth.users where id = me; exception when others then null; end;
    return jsonb_build_object('ok', true);
  end if;

  -- ---- notifications ----
  if p_path = '/api/notifications' and p_method = 'DELETE' then
    delete from pr_notes where user_id = me; return jsonb_build_object('ok', true);
  end if;
  if p_path = '/api/notifications/read' and p_method = 'POST' then
    update pr_notes set read = true where user_id = me; return jsonb_build_object('ok', true);
  end if;
  mm := regexp_match(p_path, '^/api/notifications/(\d+)$');
  if mm is not null and p_method = 'DELETE' then
    delete from pr_notes where id = mm[1]::bigint and user_id = me; return jsonb_build_object('ok', true);
  end if;

  -- ---- rooms ----
  if p_path = '/api/rooms' and p_method = 'POST' then
    v_name := pr_clean(b->>'name', 20);
    if v_name = '' then return pr_err('bad_name', 400); end if;
    if (select count(*) from pr_members where user_id = me) >= 12 then return pr_err('too_many_rooms', 400); end if;
    rid := 'r' || replace(gen_random_uuid()::text, '-', '');
    v_code := pr_new_code();
    insert into pr_rooms(id, name, code, owner_id, hue, door, created) values (rid, v_name, v_code, me, null, 'plain', t);
    insert into pr_members(room_id, user_id, joined) values (rid, me, t);
    return jsonb_build_object('id', rid, 'code', v_code);
  end if;
  if p_path = '/api/rooms/join' and p_method = 'POST' then
    v_code := upper(regexp_replace(pr_clean(b->>'code', 12), '\s', '', 'g'));
    if v_code ~ '^[A-Z0-9]{4}$' then v_code := 'POO-' || v_code; end if;
    select * into rm from pr_rooms where code = v_code;
    if not found then return pr_err('no_room', 404); end if;
    if exists (select 1 from pr_members where room_id = rm.id and user_id = me) then
      return jsonb_build_object('id', rm.id, 'already', true);
    end if;
    others := pr_member_ids(rm.id);
    if coalesce(array_length(others, 1), 0) >= 16 then return pr_err('room_full', 400); end if;
    if (select count(*) from pr_members where user_id = me) >= 12 then return pr_err('too_many_rooms', 400); end if;
    insert into pr_members(room_id, user_id, joined) values (rm.id, me, t);
    perform pr_note(others, 'n.joined', jsonb_build_object('name', my_name, 'room', rm.name), 'enter');
    perform pr_sync(rm.id);
    return jsonb_build_object('id', rm.id);
  end if;

  mm := regexp_match(p_path, '^/api/rooms/([A-Za-z0-9]+)(?:/([a-z]+))?$');
  if mm is not null then
    rid := mm[1]; act := coalesce(mm[2], '');
    select * into rm from pr_rooms where id = rid;
    if not found or not exists (select 1 from pr_members where room_id = rid and user_id = me) then return pr_err('no_room', 404); end if;
    own := rm.owner_id = me;

    if act = '' and p_method = 'PATCH' then
      if not own then return pr_err('owner_only', 403); end if;
      if b ? 'name' then
        v_name := pr_clean(b->>'name', 20);
        if v_name = '' then return pr_err('bad_name', 400); end if;
        update pr_rooms set name = v_name where id = rid;
      end if;
      if b ? 'door' then
        if not (b->>'door' = any(array['plain','wc','moon','planks','window','number'])) then return pr_err('bad_door', 400); end if;
        update pr_rooms set door = b->>'door' where id = rid;
      end if;
      if b ? 'hue' then
        if jsonb_typeof(b->'hue') = 'null' then
          update pr_rooms set hue = null where id = rid;
        else
          v_hue := (b->>'hue')::numeric::int;
          if v_hue < 0 or v_hue > 360 then return pr_err('bad_hue', 400); end if;
          update pr_rooms set hue = v_hue where id = rid;
        end if;
      end if;
      perform pr_sync(rid);
      return jsonb_build_object('ok', true);
    end if;

    if act = '' and p_method = 'DELETE' then
      if not own then return pr_err('owner_only', 403); end if;
      ids := pr_member_ids(rid);
      perform pr_note(array(select x from unnest(ids) x where x <> me), 'n.roomGone', jsonb_build_object('room', rm.name), '');
      delete from pr_rooms where id = rid;
      perform pr_emit(ids, 'sync', jsonb_build_object('room', rid));
      return jsonb_build_object('ok', true);
    end if;

    if act = 'leave' and p_method = 'POST' then
      perform pr_leave(rid, me); return jsonb_build_object('ok', true);
    end if;

    if act = 'enter' and p_method = 'POST' then
      v_mode := case when b->>'mode' in ('normal', 'hard', 'loose') then b->>'mode' else 'normal' end;
      if exists (select 1 from pr_active where room_id = rid and user_id = me) then return pr_err('already_in', 409); end if;
      ids := pr_member_ids(rid);
      insert into pr_active(room_id, user_id, stall, started, mode)
      values (rid, me, greatest(0, coalesce(array_position(ids, me), 1) - 1), t, v_mode);
      others := array(select x from unnest(ids) x where x <> me);
      if v_mode = 'loose' then
        perform pr_note(others, 'n.urgent', jsonb_build_object('name', my_name, 'room', rm.name), 'siren');
      else
        perform pr_note(others, case when v_mode = 'hard' then 'n.enteredHard' else 'n.entered' end,
                        jsonb_build_object('name', my_name, 'room', rm.name), 'enter');
      end if;
      perform pr_sync(rid);
      return jsonb_build_object('ok', true);
    end if;

    if act = 'flush' and p_method = 'POST' then
      select * into s from pr_active where room_id = rid and user_id = me;
      if not found then return pr_err('not_in', 409); end if;
      secs := greatest(1, round((t - s.started) / 1000.0)::int);
      delete from pr_active where room_id = rid and user_id = me;
      insert into pr_records(room_id, user_id, start, ended, seconds, kind) values (rid, me, s.started, t, secs, s.mode);
      perform pr_sync(rid);
      return jsonb_build_object('seconds', secs, 'kind', s.mode);
    end if;

    if act = 'push' and p_method = 'POST' then
      v_n := greatest(0, least(6, coalesce((b->>'n')::numeric::int, 0)));
      s := pr_add_push(rid, me, v_n);
      if s is null then return pr_err('not_in', 409); end if;
      perform pr_sync(rid);
      return jsonb_build_object('push', s.push, 'relieved', s.relieved, 'goal', 10);
    end if;

    if act = 'mode' and p_method = 'POST' then
      v_mode := case when b->>'mode' in ('normal', 'hard', 'loose') then b->>'mode' else 'normal' end;
      update pr_active set mode = v_mode, push = 0, relieved = false where room_id = rid and user_id = me;
      if v_mode = 'loose' then
        perform pr_note(array(select x from unnest(pr_member_ids(rid)) x where x <> me), 'n.urgent',
                        jsonb_build_object('name', my_name, 'room', rm.name), 'siren');
      end if;
      perform pr_sync(rid);
      return jsonb_build_object('ok', true);
    end if;

    if act in ('cheer', 'knock') and p_method = 'POST' then
      if coalesce(b->>'userId', '') !~ '^[0-9a-fA-F-]{36}$' then return pr_err('not_in', 409); end if;
      v_target := (b->>'userId')::uuid;
      select * into s from pr_active where room_id = rid and user_id = v_target;
      if not found or v_target = me then return pr_err('not_in', 409); end if;
      if act = 'cheer' then
        update pr_active set cheers = cheers + 1 where room_id = rid and user_id = v_target;
        if s.mode in ('hard', 'loose') and not s.relieved then perform pr_add_push(rid, v_target, 3); end if;
        perform pr_note(array[v_target], 'n.cheered', jsonb_build_object('name', my_name, 'room', rm.name), 'cheer');
      else
        update pr_active set knocks = knocks + 1 where room_id = rid and user_id = v_target;
        v_msg := greatest(0, least(19, coalesce((b->>'msg')::numeric::int, 0)));
        if v_msg = (select last_knock from profiles where id = v_target) then v_msg := (v_msg + 1) % 20; end if;
        update profiles set last_knock = v_msg where id = v_target;
        perform pr_note(array[v_target], 'n.knocked',
          jsonb_build_object('name', my_name, 'target', (select nickname from profiles where id = v_target), 'msg', v_msg, 'room', rm.name), 'knock');
      end if;
      perform pr_sync(rid);
      return jsonb_build_object('ok', true);
    end if;
  end if;

  return pr_err('not_found', 404);
end $$;

-- nickname already used? (checked before sign-up, so it is open to anon; answers only true/false)
create or replace function public.pr_nick_taken(n text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where lower(nickname) = lower(pr_clean(n, 10)))
      or exists (select 1 from auth.users u where lower(pr_clean(u.raw_user_meta_data->>'name', 10)) = lower(pr_clean(n, 10))
                 and not exists (select 1 from profiles p where p.id = u.id))   -- signed up, mail not opened yet
$$;
grant execute on function public.pr_nick_taken(text) to anon, authenticated;

-- only signed-in users may call the API; helper functions stay private
revoke all on function public.poo_api(text, text, jsonb) from public, anon;
grant execute on function public.poo_api(text, text, jsonb) to authenticated;
revoke all on function public.pr_state(uuid) from public, anon, authenticated;
revoke all on function public.pr_emit(uuid[], text, jsonb) from public, anon, authenticated;
revoke all on function public.pr_note(uuid[], text, jsonb, text) from public, anon, authenticated;
revoke all on function public.pr_sync(text) from public, anon, authenticated;
revoke all on function public.pr_leave(text, uuid) from public, anon, authenticated;
revoke all on function public.pr_add_push(text, uuid, int) from public, anon, authenticated;
revoke all on function public.pr_member_ids(text) from public, anon, authenticated;
revoke all on function public.pr_new_code() from public, anon, authenticated;
