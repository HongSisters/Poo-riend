'use strict';
/* =====================================================================
   Poo-riend server · zero dependency (Node >= 22.13)
   - HTTP API + static files  (node:http)
   - SQLite storage           (node:sqlite)
   - realtime push            (Server-Sent Events)
   - demo bots that poop on their own so a lone guest sees a live toilet
   ===================================================================== */
process.removeAllListeners('warning');
process.on('warning', function(w){ if(w.name !== 'ExperimentalWarning') console.warn(w); });

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');

const PORT = parseInt(process.env.PORT || '3000', 10);
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const PUBLIC_DIR = path.join(__dirname, 'public');
const PUSH_GOAL = 10;                 // 변비: 힘주기 10번이면 해소
const MAX_MEMBERS = 16;
const MAX_ROOMS_PER_USER = 12;
const TOKEN_DAYS = 60;

fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new DatabaseSync(path.join(DATA_DIR, 'poo-riend.db'));
db.exec(`
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS users(
  id TEXT PRIMARY KEY, handle TEXT UNIQUE, name TEXT NOT NULL, phone TEXT, pw TEXT,
  poo TEXT NOT NULL, best INTEGER NOT NULL DEFAULT 0, kind TEXT NOT NULL DEFAULT 'user',
  created INTEGER NOT NULL, seen INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS tokens(
  token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, created INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS rooms(
  id TEXT PRIMARY KEY, name TEXT NOT NULL, code TEXT UNIQUE NOT NULL, owner_id TEXT NOT NULL,
  hue INTEGER, demo INTEGER NOT NULL DEFAULT 0, created INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS members(
  room_id TEXT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  joined INTEGER NOT NULL, PRIMARY KEY(room_id, user_id));
CREATE TABLE IF NOT EXISTS active(
  room_id TEXT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stall INTEGER NOT NULL, started INTEGER NOT NULL, mode TEXT NOT NULL,
  push INTEGER NOT NULL DEFAULT 0, cheers INTEGER NOT NULL DEFAULT 0, relieved INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(room_id, user_id));
CREATE TABLE IF NOT EXISTS records(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_id TEXT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start INTEGER NOT NULL, end INTEGER NOT NULL, seconds INTEGER NOT NULL, kind TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS rec_room ON records(room_id, start);
CREATE TABLE IF NOT EXISTS notes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key TEXT NOT NULL, vars TEXT NOT NULL, at INTEGER NOT NULL, read INTEGER NOT NULL DEFAULT 0);
CREATE INDEX IF NOT EXISTS notes_user ON notes(user_id, at);
`);
try{ db.exec('ALTER TABLE active ADD COLUMN knocks INTEGER NOT NULL DEFAULT 0'); }catch(e){ /* already there */ }
try{ db.exec("ALTER TABLE rooms ADD COLUMN door TEXT NOT NULL DEFAULT 'plain'"); }catch(e){ /* already there */ }

/* ---------------- helpers ---------------- */
const now = () => Date.now();
const uid = (p) => p + crypto.randomBytes(8).toString('hex');
const q = (sql) => db.prepare(sql);
const SHAPES = ['classic', 'flat', 'tall', 'round', 'tip'];
const HATS = ['none', 'crown', 'beanie', 'cap', 'beret', 'tp', 'bow', 'flower', 'wizard', 'phones', 'cone',
  'chef', 'tophat', 'cowboy', 'santa', 'hardhat', 'halo', 'bunny', 'propeller', 'grad'];
const MODES = ['normal', 'hard', 'loose'];
const PUSHY = ['hard', 'loose'];   // 변비·설사 both have the push gauge
const DOORS = ['plain', 'wc', 'moon', 'planks', 'window', 'number'];
const PROPS = ['none', 'plant', 'roll', 'news', 'clock', 'spray', 'radio', 'duck', 'candle', 'book', 'phone', 'cactus', 'frame', 'lamp', 'tissue', 'cup'];
const ACCS = ['none', 'scarf', 'bowtie', 'cape', 'flower', 'balloon',
  'necklace', 'tie', 'bandana', 'bag', 'wings', 'flies', 'plunger', 'umbrella', 'lollipop', 'wand', 'coffee', 'icecream', 'pinwheel', 'mic', 'bubbletea'];
const TOILETS = ['basic', 'bidet', 'wood', 'gold', 'fluffy', 'mint', 'black', 'stripe', 'heart', 'ocean', 'flower', 'throne', 'space', 'squat'];

function cleanPoo(p){
  p = p || {};
  return {
    shape: SHAPES.includes(p.shape) ? p.shape : 'classic',
    thick: Number.isInteger(p.thick) && p.thick >= 0 && p.thick <= 3 ? p.thick : 1,
    hat: HATS.includes(p.hat) ? p.hat : 'none',
    door: DOORS.includes(p.door) ? p.door : 'plain',
    prop: PROPS.includes(p.prop) ? p.prop : 'none',
    acc: ACCS.includes(p.acc) ? p.acc : 'none',
    toilet: TOILETS.includes(p.toilet) ? p.toilet : 'basic'
  };
}
function randPoo(){
  return { shape: SHAPES[Math.floor(Math.random() * SHAPES.length)], thick: Math.floor(Math.random() * 4), hat: HATS[Math.floor(Math.random() * HATS.length)] };
}
function cleanText(s, max){
  return String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, max);
}
function hashPw(pw){
  const salt = crypto.randomBytes(16);
  const h = crypto.scryptSync(pw, salt, 32);
  return 'scrypt$' + salt.toString('hex') + '$' + h.toString('hex');
}
function checkPw(pw, stored){
  if(!stored || !stored.startsWith('scrypt$')) return false;
  const [, s, h] = stored.split('$');
  const got = crypto.scryptSync(pw, Buffer.from(s, 'hex'), 32);
  const want = Buffer.from(h, 'hex');
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}
function newCode(){
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for(let i = 0; i < 50; i++){
    let c = 'POO-';
    for(let k = 0; k < 4; k++) c += A[crypto.randomInt(A.length)];
    if(!q('SELECT 1 FROM rooms WHERE code=?').get(c)) return c;
  }
  return 'POO-' + crypto.randomBytes(3).toString('hex').toUpperCase();
}

/* ---------------- realtime (SSE) ---------------- */
const clients = new Map();   // userId -> Set<res>
function emit(userIds, event, data){
  const msg = 'event: ' + event + '\ndata: ' + JSON.stringify(data || {}) + '\n\n';
  for(const id of new Set(userIds)){
    const set = clients.get(id);
    if(!set) continue;
    for(const res of set){ try{ res.write(msg); }catch(e){} }
  }
}
function memberIds(roomId){
  return q('SELECT user_id FROM members WHERE room_id=? ORDER BY joined ASC').all(roomId).map(r => r.user_id);
}
function syncRoom(roomId){ emit(memberIds(roomId), 'sync', { room: roomId }); }

/* notifications are stored as i18n key + vars so every client shows them in its own language */
/* knock lines: the same line never lands twice in a row on one person */
const lastKnock = new Map();
function nextKnock(uid){
  let m = Math.floor(Math.random() * 20);
  if(lastKnock.get(uid) === m) m = (m + 1 + Math.floor(Math.random() * 19)) % 20;
  lastKnock.set(uid, m);
  return m;
}
function note(userIds, key, vars, fx){
  const at = now();
  const ins = q('INSERT INTO notes(user_id,key,vars,at) VALUES(?,?,?,?)');
  const humans = userIds.filter(id => {
    const u = q('SELECT kind FROM users WHERE id=?').get(id);
    return u && u.kind !== 'bot';
  });
  for(const id of humans){
    const r = ins.run(id, key, JSON.stringify(vars || {}), at);
    emit([id], 'note', { id: Number(r.lastInsertRowid), key, vars: vars || {}, fx: fx || '', at });
  }
}
function trimNotes(){
  db.exec(`DELETE FROM notes WHERE id IN (
    SELECT id FROM (SELECT id, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY at DESC) rn FROM notes) WHERE rn > 50)`);
}

/* ---------------- state for one user ---------------- */
function userRow(id){ return q('SELECT * FROM users WHERE id=?').get(id); }
function publicUser(u){
  return { id: u.id, name: u.name, handle: u.handle || '', phone: u.phone || '', kind: u.kind, poo: JSON.parse(u.poo), best: u.best };
}
function buildState(userId){
  const u = userRow(userId);
  if(!u) return null;
  const since = now() - 400 * 864e5;
  const rooms = q(`SELECT r.* FROM rooms r JOIN members m ON m.room_id=r.id WHERE m.user_id=? ORDER BY m.joined ASC`).all(userId).map(r => {
    const members = q(`SELECT u.id, u.name, u.poo, u.kind FROM members m JOIN users u ON u.id=m.user_id WHERE m.room_id=? ORDER BY m.joined ASC`).all(r.id)
      .map(m => ({ id: m.id, name: m.name, poo: JSON.parse(m.poo), bot: m.kind === 'bot' }));
    const sessions = q('SELECT * FROM active WHERE room_id=?').all(r.id)
      .map(s => ({ userId: s.user_id, stall: s.stall, startedAt: s.started, mode: s.mode, push: s.push, cheers: s.cheers, knocks: s.knocks || 0, relieved: !!s.relieved }));
    const records = q('SELECT user_id, start, end, seconds, kind FROM records WHERE room_id=? AND start>? ORDER BY start ASC').all(r.id, since)
      .map(x => ({ userId: x.user_id, start: x.start, end: x.end, seconds: x.seconds, kind: x.kind }));
    return { id: r.id, name: r.name, code: r.code, ownerId: r.owner_id, hue: r.hue, door: r.door || 'plain', demo: !!r.demo, members, sessions, records };
  });
  const notifications = q('SELECT id, key, vars, at, read FROM notes WHERE user_id=? ORDER BY at DESC LIMIT 50').all(userId)
    .map(n => ({ id: n.id, key: n.key, vars: JSON.parse(n.vars), at: n.at, read: !!n.read }));
  return { user: publicUser(u), rooms, notifications, pushGoal: PUSH_GOAL, serverTime: now() };
}

/* ---------------- room logic ---------------- */
function isMember(roomId, userId){ return !!q('SELECT 1 FROM members WHERE room_id=? AND user_id=?').get(roomId, userId); }
function enterStall(roomId, userId, mode){
  if(q('SELECT 1 FROM active WHERE room_id=? AND user_id=?').get(roomId, userId)) return false;
  const stall = Math.max(0, memberIds(roomId).indexOf(userId));
  q('INSERT INTO active(room_id,user_id,stall,started,mode) VALUES(?,?,?,?,?)').run(roomId, userId, stall, now(), mode);
  const u = userRow(userId), room = q('SELECT name FROM rooms WHERE id=?').get(roomId);
  const others = memberIds(roomId).filter(id => id !== userId);
  if(mode === 'loose') note(others, 'n.urgent', { name: u.name, room: room.name }, 'siren');
  else note(others, mode === 'hard' ? 'n.enteredHard' : 'n.entered', { name: u.name, room: room.name }, 'enter');
  syncRoom(roomId);
  return true;
}
function flushStall(roomId, userId){
  const s = q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(roomId, userId);
  if(!s) return null;
  const end = now();
  const sec = Math.max(1, Math.round((end - s.started) / 1000));
  q('DELETE FROM active WHERE room_id=? AND user_id=?').run(roomId, userId);
  q('INSERT INTO records(room_id,user_id,start,end,seconds,kind) VALUES(?,?,?,?,?,?)').run(roomId, userId, s.started, end, sec, s.mode);
  syncRoom(roomId);
  return { seconds: sec, kind: s.mode };
}
function addPush(roomId, userId, n){
  const s = q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(roomId, userId);
  if(!s || !PUSHY.includes(s.mode) || s.relieved) return s;
  const push = Math.min(PUSH_GOAL, s.push + n);
  const relieved = push >= PUSH_GOAL ? 1 : 0;
  q('UPDATE active SET push=?, relieved=? WHERE room_id=? AND user_id=?').run(push, relieved, roomId, userId);
  if(relieved){
    const u = userRow(userId), room = q('SELECT name FROM rooms WHERE id=?').get(roomId);
    note(memberIds(roomId), s.mode === 'loose' ? 'n.relievedLoose' : 'n.relieved', { name: u.name, room: room.name }, 'relief');
  }
  return q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(roomId, userId);
}
function leaveRoom(roomId, userId){
  const r = q('SELECT * FROM rooms WHERE id=?').get(roomId);
  if(!r) return;
  const ids = memberIds(roomId);
  q('DELETE FROM active WHERE room_id=? AND user_id=?').run(roomId, userId);
  q('DELETE FROM records WHERE room_id=? AND user_id=?').run(roomId, userId);
  q('DELETE FROM members WHERE room_id=? AND user_id=?').run(roomId, userId);
  const humans = q(`SELECT m.user_id FROM members m JOIN users u ON u.id=m.user_id WHERE m.room_id=? AND u.kind!='bot' ORDER BY m.joined ASC`).all(roomId);
  if(!humans.length){
    q('DELETE FROM rooms WHERE id=?').run(roomId);
  } else if(r.owner_id === userId){
    q('UPDATE rooms SET owner_id=? WHERE id=?').run(humans[0].user_id, roomId);
  }
  emit(ids, 'sync', { room: roomId });
}
function deleteUser(userId){
  const rooms = q('SELECT room_id FROM members WHERE user_id=?').all(userId).map(r => r.room_id);
  for(const rid of rooms) leaveRoom(rid, userId);
  q('DELETE FROM users WHERE id=?').run(userId);
  const set = clients.get(userId);
  if(set) for(const res of set){ try{ res.end(); }catch(e){} }
  clients.delete(userId);
}

/* ---------------- demo bots ---------------- */
const BOTS = [
  { name: '명수', poo: { shape: 'tall', thick: 2, hat: 'cap', toilet: 'wood', prop: 'plant', acc: 'scarf' } },
  { name: '영케', poo: { shape: 'round', thick: 0, hat: 'bow', toilet: 'fluffy', prop: 'clock', acc: 'balloon' } },
  { name: '험프티덤프티', poo: { shape: 'flat', thick: 2, hat: 'tophat', toilet: 'throne', prop: 'duck', acc: 'tie' } },
  { name: '이안', poo: { shape: 'tip', thick: 1, hat: 'hardhat', toilet: 'black', prop: 'radio', acc: 'coffee' } },
  { name: '비욘세', poo: { shape: 'tall', thick: 0, hat: 'crown', toilet: 'gold', prop: 'frame', acc: 'mic' } },
  { name: '톰홀랜드', poo: { shape: 'classic', thick: 2, hat: 'cap', toilet: 'heart', prop: 'phone', acc: 'umbrella' } },
  { name: '홍빵진', poo: { shape: 'classic', thick: 1, hat: 'chef', toilet: 'mint', prop: 'book', acc: 'bandana' } },
  { name: '신방동불주먹', poo: { shape: 'flat', thick: 2, hat: 'beanie', toilet: 'stripe', prop: 'lamp', acc: 'plunger' } },
  { name: '참외씨', poo: { shape: 'round', thick: 1, hat: 'propeller', toilet: 'ocean', prop: 'candle', acc: 'pinwheel' } }
];
function botIds(){
  return BOTS.map((b, i) => {
    const id = 'bot' + i;
    if(!userRow(id)){
      q('INSERT INTO users(id,handle,name,poo,kind,created,seen) VALUES(?,?,?,?,?,?,?)')
        .run(id, null, b.name, JSON.stringify(b.poo), 'bot', now(), now());
    } else {
      q('UPDATE users SET name=?, poo=? WHERE id=?').run(b.name, JSON.stringify(b.poo), id);
    }
    return id;
  });
}
function seedRecords(roomId, userIds, seed){
  let a = seed >>> 0;
  const rnd = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const d0 = new Date(); const y = d0.getFullYear(), m = d0.getMonth(), today = d0.getDate();
  const ins = q('INSERT INTO records(room_id,user_id,start,end,seconds,kind) VALUES(?,?,?,?,?,?)');
  for(let d = 1; d <= today; d++){
    for(const id of userIds){
      const roll = rnd();
      const n = roll < 0.34 ? 0 : roll < 0.8 ? 1 : (roll < 0.94 ? 2 : 3);
      for(let k = 0; k < n; k++){
        const start = new Date(y, m, d, 6 + Math.floor(rnd() * 16), Math.floor(rnd() * 60)).getTime();
        const kr = rnd();
        const kind = (n >= 3 && k === 0) ? 'loose' : kr < 0.13 ? 'hard' : kr < 0.22 ? 'loose' : 'normal';
        const sec = kind === 'hard' ? 600 + Math.floor(rnd() * 900) : kind === 'loose' ? 40 + Math.floor(rnd() * 180) : 90 + Math.floor(rnd() * 460);
        if(start + sec * 1000 > now()) continue;
        ins.run(roomId, id, start, start + sec * 1000, sec, kind);
      }
    }
  }
}
const botPlan = new Map();     // roomId:botId -> planned seconds
function botTick(){
  const live = new Set([...clients.keys()].filter(k => clients.get(k).size));
  if(!live.size) return;
  const rooms = q(`SELECT DISTINCT m.room_id FROM members m JOIN users u ON u.id=m.user_id WHERE u.kind='bot'`).all().map(r => r.room_id);
  for(const rid of rooms){
    const ids = memberIds(rid);
    if(!ids.some(id => live.has(id))) continue;   // nobody watching -> bots sleep
    // bots sometimes knock on / cheer a human who is inside
    for(const h of ids.filter(id => !id.startsWith('bot') && live.has(id))){
      const s = q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(rid, h);
      if(!s || Math.random() > 0.2) continue;
      const bots = ids.filter(id => id.startsWith('bot'));
      if(!bots.length) continue;
      const bot = userRow(bots[Math.floor(Math.random() * bots.length)]), hu = userRow(h), room = q('SELECT name FROM rooms WHERE id=?').get(rid);
      if(Math.random() < 0.5){
        q('UPDATE active SET knocks=knocks+1 WHERE room_id=? AND user_id=?').run(rid, h);
        note([h], 'n.knocked', { name: bot.name, target: hu.name, msg: nextKnock(h), room: room.name }, 'knock');
      } else {
        q('UPDATE active SET cheers=cheers+1 WHERE room_id=? AND user_id=?').run(rid, h);
        if(PUSHY.includes(s.mode) && !s.relieved) addPush(rid, h, 3);
        note([h], 'n.cheered', { name: bot.name, room: room.name }, 'cheer');
      }
      syncRoom(rid);
    }
    for(const bid of ids.filter(id => id.startsWith('bot'))){
      const key = rid + ':' + bid;
      const s = q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(rid, bid);
      if(s){
        const el = (now() - s.started) / 1000;
        if(s.mode === 'hard' && !s.relieved && Math.random() < 0.3) addPush(rid, bid, 1), syncRoom(rid);
        if(el > (botPlan.get(key) || 120) && (!PUSHY.includes(s.mode) || s.relieved)){ flushStall(rid, bid); botPlan.delete(key); }
      } else if(Math.random() < 0.05){
        const r = Math.random();
        const mode = r < 0.68 ? 'normal' : r < 0.86 ? 'hard' : 'loose';
        botPlan.set(key, mode === 'loose' ? 35 + Math.random() * 40 : 70 + Math.random() * 150);
        enterStall(rid, bid, mode);
      }
    }
  }
}

/* ---------------- housekeeping ---------------- */
function housekeeping(){
  const cutoff = now() - 3 * 864e5;
  const old = q(`SELECT id FROM users WHERE kind='guest' AND seen<?`).all(cutoff);
  for(const g of old){
    for(const r of q('SELECT r.id FROM rooms r JOIN members m ON m.room_id=r.id WHERE m.user_id=? AND r.demo=1').all(g.id)) q('DELETE FROM rooms WHERE id=?').run(r.id);
    deleteUser(g.id);
  }
  q('DELETE FROM tokens WHERE created<?').run(now() - TOKEN_DAYS * 864e5);
  // a session left open for 3h is closed as a 10 min visit
  for(const s of q('SELECT * FROM active WHERE started<?').all(now() - 3 * 3600e3)){
    q('DELETE FROM active WHERE room_id=? AND user_id=?').run(s.room_id, s.user_id);
    q('INSERT INTO records(room_id,user_id,start,end,seconds,kind) VALUES(?,?,?,?,?,?)').run(s.room_id, s.user_id, s.started, s.started + 600e3, 600, s.mode);
    syncRoom(s.room_id);
  }
  trimNotes();
}

/* ---------------- http plumbing ---------------- */
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
function send(res, code, obj, headers){
  const body = JSON.stringify(obj);
  res.writeHead(code, Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, headers || {}));
  res.end(body);
}
const fail = (res, code, err) => send(res, code, { error: err });
function readBody(req){
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', c => { size += c.length; if(size > 16384){ reject(new Error('big')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => { try{ resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); }catch(e){ reject(e); } });
    req.on('error', reject);
  });
}
function cookies(req){
  const out = {};
  (req.headers.cookie || '').split(';').forEach(p => { const i = p.indexOf('='); if(i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return out;
}
function isHttps(req){ return req.socket.encrypted || (req.headers['x-forwarded-proto'] || '').split(',')[0].trim() === 'https'; }
function setToken(req, res, userId){
  const token = crypto.randomBytes(32).toString('base64url');
  q('INSERT INTO tokens(token,user_id,created) VALUES(?,?,?)').run(token, userId, now());
  return 'pr_session=' + token + '; Path=/; HttpOnly; SameSite=Lax; Max-Age=' + (TOKEN_DAYS * 86400) + (isHttps(req) ? '; Secure' : '');
}
function authUser(req){
  const tok = cookies(req).pr_session;
  if(!tok) return null;
  const row = q('SELECT u.* FROM tokens t JOIN users u ON u.id=t.user_id WHERE t.token=?').get(tok);
  return row || null;
}
/* tiny rate limit for auth endpoints: 20 tries / 10 min / ip */
const tries = new Map();
function limited(req){
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress;
  const t = now(), arr = (tries.get(ip) || []).filter(x => t - x < 600e3);
  arr.push(t); tries.set(ip, arr);
  return arr.length > 20;
}

function serveStatic(req, res, pathname){
  let p = pathname === '/' ? '/index.html' : pathname;
  const file = path.normalize(path.join(PUBLIC_DIR, p));
  if(!file.startsWith(PUBLIC_DIR)) return fail(res, 403, 'forbidden');
  fs.stat(file, (err, st) => {
    if(err || !st.isFile()){
      // SPA fallback
      if(!path.extname(p)) return serveStatic(req, res, '/');
      res.writeHead(404); return res.end('not found');
    }
    const ext = path.extname(file);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' || ext === '.js' ? 'no-cache' : 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'same-origin'
    });
    fs.createReadStream(file).pipe(res);
  });
}

/* ---------------- routes ---------------- */
async function api(req, res, pathname){
  const method = req.method;
  let body = {};
  if(method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE'){
    // CSRF guard: JSON only, same-origin fetch
    if(!(req.headers['content-type'] || '').includes('application/json')) return fail(res, 415, 'json_only');
    try{ body = await readBody(req); }catch(e){ return fail(res, 400, 'bad_body'); }
  }

  if(pathname === '/api/health') return send(res, 200, { ok: true, t: now() });

  /* ---- auth ---- */
  if(pathname === '/api/signup' && method === 'POST'){
    if(limited(req)) return fail(res, 429, 'slow_down');
    const handle = cleanText(body.handle, 20).toLowerCase();
    const name = cleanText(body.name, 10);
    const pw = String(body.password || '');
    const phone = cleanText(body.phone, 15);
    if(!/^[a-z0-9._-]{3,20}$/.test(handle)) return fail(res, 400, 'bad_handle');
    if(pw.length < 4 || pw.length > 64) return fail(res, 400, 'bad_password');
    if(!name) return fail(res, 400, 'bad_name');
    if(phone && phone.replace(/\D/g, '').length < 10) return fail(res, 400, 'bad_phone');
    if(q('SELECT 1 FROM users WHERE handle=?').get(handle)) return fail(res, 409, 'handle_taken');
    const id = uid('u');
    q('INSERT INTO users(id,handle,name,phone,pw,poo,kind,created,seen) VALUES(?,?,?,?,?,?,?,?,?)')
      .run(id, handle, name, phone || null, hashPw(pw), JSON.stringify({ shape: 'classic', thick: 1, hat: 'beanie' }), 'user', now(), now());
    return send(res, 200, buildState(id), { 'Set-Cookie': setToken(req, res, id) });
  }
  if(pathname === '/api/login' && method === 'POST'){
    if(limited(req)) return fail(res, 429, 'slow_down');
    const handle = cleanText(body.handle, 20).toLowerCase();
    const u = q(`SELECT * FROM users WHERE handle=? AND kind='user'`).get(handle);
    if(!u || !checkPw(String(body.password || ''), u.pw)) return fail(res, 401, 'bad_login');
    return send(res, 200, buildState(u.id), { 'Set-Cookie': setToken(req, res, u.id) });
  }
  if(pathname === '/api/demo' && method === 'POST'){
    if(limited(req)) return fail(res, 429, 'slow_down');
    const id = uid('g');
    const GUESTS = ['도윤', '하준', '서윤', '지우', '예준', '하은', '수아', '시우', '유진', '건우'];
    const name = cleanText(body.name, 10) || GUESTS[crypto.randomInt(GUESTS.length)];
    q('INSERT INTO users(id,handle,name,poo,kind,created,seen) VALUES(?,?,?,?,?,?,?)')
      .run(id, null, name, JSON.stringify({ shape: 'classic', thick: 1, hat: 'beanie' }), 'guest', now(), now());
    const rid = uid('r');
    q('INSERT INTO rooms(id,name,code,owner_id,hue,demo,created,door) VALUES(?,?,?,?,?,1,?,?)').run(rid, cleanText(body.roomName, 20) || '데모 뒷간', newCode(), id, 28, now(), 'moon');
    const bots = botIds();
    const ins = q('INSERT INTO members(room_id,user_id,joined) VALUES(?,?,?)');
    ins.run(rid, id, now());
    const crew1 = [bots[0], bots[1], bots[2], bots[3]];     // 명수, 영케, 험프티덤프티, 이안
    crew1.forEach((b, i) => ins.run(rid, b, now() + i + 1));
    seedRecords(rid, [id].concat(crew1), crypto.randomInt(1e9));
    // one bot is already sitting there with constipation, so the gimmick is visible right away
    q('INSERT INTO active(room_id,user_id,stall,started,mode,push,knocks) VALUES(?,?,?,?,?,?,?)').run(rid, bots[0], 1, now() - 7 * 60e3, 'hard', 4, 2);
    botPlan.set(rid + ':' + bots[0], 200);
    // two more demo toilets with a smaller crowd each
    const extra = Array.isArray(body.roomNames) ? body.roomNames.slice(1, 3) : ['가속기 3층', '우리집 똥간'];
    // the other two toilets belong to someone else: owner joins first, the guest joins last
    [[extra[0] || '가속기 3층', 200, 'planks', [bots[4], bots[5]]], [extra[1] || '우리집 똥간', 140, 'window', [bots[6], bots[7], bots[8]]]].forEach(([nm, hue, door, who], k) => {
      const r2 = uid('r');
      q('INSERT INTO rooms(id,name,code,owner_id,hue,demo,created,door) VALUES(?,?,?,?,?,1,?,?)').run(r2, cleanText(nm, 20), newCode(), who[0], hue, now() + k + 1, door);
      who.forEach((b, i) => ins.run(r2, b, now() - 1000 + i));
      ins.run(r2, id, now());
      seedRecords(r2, [id].concat(who), crypto.randomInt(1e9));
      if(k === 0) q('INSERT INTO active(room_id,user_id,stall,started,mode,push,knocks) VALUES(?,?,?,?,?,?,?)').run(r2, who[1], 2, now() - 3 * 60e3, 'normal', 0, 0);
      if(k === 1) q('INSERT INTO active(room_id,user_id,stall,started,mode,push,knocks) VALUES(?,?,?,?,?,?,?)').run(r2, who[2], 3, now() - 2 * 60e3, 'loose', 2, 1);
    });
    return send(res, 200, buildState(id), { 'Set-Cookie': setToken(req, res, id) });
  }

  const me = authUser(req);
  if(!me) return fail(res, 401, 'login');

  if(pathname === '/api/logout' && method === 'POST'){
    q('DELETE FROM tokens WHERE token=?').run(cookies(req).pr_session || '');
    return send(res, 200, { ok: true }, { 'Set-Cookie': 'pr_session=; Path=/; Max-Age=0' });
  }
  if(pathname === '/api/me' && method === 'DELETE'){
    deleteUser(me.id);
    return send(res, 200, { ok: true }, { 'Set-Cookie': 'pr_session=; Path=/; Max-Age=0' });
  }
  if(pathname === '/api/state' && method === 'GET'){
    q('UPDATE users SET seen=? WHERE id=?').run(now(), me.id);
    return send(res, 200, buildState(me.id));
  }
  if(pathname === '/api/stream' && method === 'GET'){
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', 'Connection': 'keep-alive', 'X-Accel-Buffering': 'no' });
    res.write('retry: 3000\n\n');
    if(!clients.has(me.id)) clients.set(me.id, new Set());
    clients.get(me.id).add(res);
    const hb = setInterval(() => { try{ res.write(': hb\n\n'); }catch(e){} }, 25000);
    req.on('close', () => { clearInterval(hb); const s = clients.get(me.id); if(s){ s.delete(res); if(!s.size) clients.delete(me.id); } });
    return;
  }
  if(pathname === '/api/me/poo' && method === 'PUT'){
    q('UPDATE users SET poo=? WHERE id=?').run(JSON.stringify(cleanPoo(body)), me.id);
    for(const r of q('SELECT room_id FROM members WHERE user_id=?').all(me.id)) syncRoom(r.room_id);
    return send(res, 200, { ok: true });
  }
  if(pathname === '/api/me/name' && method === 'PUT'){
    const name = cleanText(body.name, 10);
    if(!name) return fail(res, 400, 'bad_name');
    q('UPDATE users SET name=? WHERE id=?').run(name, me.id);
    for(const r of q('SELECT room_id FROM members WHERE user_id=?').all(me.id)) syncRoom(r.room_id);
    return send(res, 200, { ok: true });
  }
  if(pathname === '/api/me/best' && method === 'PUT'){
    const s = Math.max(0, Math.min(1e7, parseInt(body.score, 10) || 0));
    if(s > me.best) q('UPDATE users SET best=? WHERE id=?').run(s, me.id);
    return send(res, 200, { best: Math.max(s, me.best) });
  }
  if(pathname === '/api/notifications' && method === 'DELETE'){
    q('DELETE FROM notes WHERE user_id=?').run(me.id);
    return send(res, 200, { ok: true });
  }
  const nm = pathname.match(/^\/api\/notifications\/(\d+)$/);
  if(nm && method === 'DELETE'){
    q('DELETE FROM notes WHERE id=? AND user_id=?').run(parseInt(nm[1], 10), me.id);
    return send(res, 200, { ok: true });
  }
  if(pathname === '/api/notifications/read' && method === 'POST'){
    q('UPDATE notes SET read=1 WHERE user_id=?').run(me.id);
    return send(res, 200, { ok: true });
  }
  if(pathname === '/api/rooms' && method === 'POST'){
    const name = cleanText(body.name, 20);
    if(!name) return fail(res, 400, 'bad_name');
    if(q('SELECT COUNT(*) n FROM members WHERE user_id=?').get(me.id).n >= MAX_ROOMS_PER_USER) return fail(res, 400, 'too_many_rooms');
    const id = uid('r'), code = newCode();
    q('INSERT INTO rooms(id,name,code,owner_id,hue,created) VALUES(?,?,?,?,?,?)').run(id, name, code, me.id, null, now());
    q('INSERT INTO members(room_id,user_id,joined) VALUES(?,?,?)').run(id, me.id, now());
    return send(res, 200, { id, code });
  }
  if(pathname === '/api/rooms/join' && method === 'POST'){
    let code = cleanText(body.code, 12).toUpperCase().replace(/\s/g, '');
    if(/^[A-Z0-9]{4}$/.test(code)) code = 'POO-' + code;
    const r = q('SELECT * FROM rooms WHERE code=?').get(code);
    if(!r) return fail(res, 404, 'no_room');
    if(isMember(r.id, me.id)) return send(res, 200, { id: r.id, already: true });
    if(memberIds(r.id).length >= MAX_MEMBERS) return fail(res, 400, 'room_full');
    if(q('SELECT COUNT(*) n FROM members WHERE user_id=?').get(me.id).n >= MAX_ROOMS_PER_USER) return fail(res, 400, 'too_many_rooms');
    const others = memberIds(r.id);
    q('INSERT INTO members(room_id,user_id,joined) VALUES(?,?,?)').run(r.id, me.id, now());
    note(others, 'n.joined', { name: me.name, room: r.name }, 'enter');
    syncRoom(r.id);
    return send(res, 200, { id: r.id });
  }

  const m = pathname.match(/^\/api\/rooms\/([A-Za-z0-9]+)(?:\/([a-z]+))?$/);
  if(m){
    const roomId = m[1], act = m[2] || '';
    const room = q('SELECT * FROM rooms WHERE id=?').get(roomId);
    if(!room || !isMember(roomId, me.id)) return fail(res, 404, 'no_room');
    const own = room.owner_id === me.id;

    if(!act && method === 'PATCH'){
      if(!own) return fail(res, 403, 'owner_only');
      if(body.name !== undefined){
        const name = cleanText(body.name, 20);
        if(!name) return fail(res, 400, 'bad_name');
        q('UPDATE rooms SET name=? WHERE id=?').run(name, roomId);
      }
      if(body.door !== undefined){
        if(!DOORS.includes(body.door)) return fail(res, 400, 'bad_door');
        q('UPDATE rooms SET door=? WHERE id=?').run(body.door, roomId);
      }
      if(body.hue === null){
        q('UPDATE rooms SET hue=NULL WHERE id=?').run(roomId);
      } else if(body.hue !== undefined){
        const h = parseInt(body.hue, 10);
        if(!(h >= 0 && h <= 360)) return fail(res, 400, 'bad_hue');
        q('UPDATE rooms SET hue=? WHERE id=?').run(h, roomId);
      }
      syncRoom(roomId);
      return send(res, 200, { ok: true });
    }
    if(!act && method === 'DELETE'){
      if(!own) return fail(res, 403, 'owner_only');
      const ids = memberIds(roomId);
      q('DELETE FROM rooms WHERE id=?').run(roomId);
      note(ids.filter(id => id !== me.id), 'n.roomGone', { room: room.name }, '');
      emit(ids, 'sync', { room: roomId });
      return send(res, 200, { ok: true });
    }
    if(act === 'leave' && method === 'POST'){ leaveRoom(roomId, me.id); return send(res, 200, { ok: true }); }
    if(act === 'enter' && method === 'POST'){
      const mode = MODES.includes(body.mode) ? body.mode : 'normal';
      if(!enterStall(roomId, me.id, mode)) return fail(res, 409, 'already_in');
      return send(res, 200, { ok: true });
    }
    if(act === 'flush' && method === 'POST'){
      const r = flushStall(roomId, me.id);
      if(!r) return fail(res, 409, 'not_in');
      return send(res, 200, r);
    }
    if(act === 'push' && method === 'POST'){
      const n = Math.max(0, Math.min(6, parseInt(body.n, 10) || 0));
      const s = addPush(roomId, me.id, n);
      if(!s) return fail(res, 409, 'not_in');
      syncRoom(roomId);
      return send(res, 200, { push: s.push, relieved: !!s.relieved, goal: PUSH_GOAL });
    }
    if(act === 'mode' && method === 'POST'){
      const mode = MODES.includes(body.mode) ? body.mode : 'normal';
      q('UPDATE active SET mode=?, push=0, relieved=0 WHERE room_id=? AND user_id=?').run(mode, roomId, me.id);
      if(mode === 'loose') note(memberIds(roomId).filter(id => id !== me.id), 'n.urgent', { name: me.name, room: room.name }, 'siren');
      syncRoom(roomId);
      return send(res, 200, { ok: true });
    }
    if((act === 'cheer' || act === 'knock') && method === 'POST'){
      const target = String(body.userId || '');
      const s = q('SELECT * FROM active WHERE room_id=? AND user_id=?').get(roomId, target);
      if(!s || target === me.id) return fail(res, 409, 'not_in');
      if(act === 'cheer'){
        q('UPDATE active SET cheers=cheers+1 WHERE room_id=? AND user_id=?').run(roomId, target);
        if(PUSHY.includes(s.mode) && !s.relieved) addPush(roomId, target, 3);   // 응원 = 힘주기 +3
        note([target], 'n.cheered', { name: me.name, room: room.name }, 'cheer');
      } else {
        q('UPDATE active SET knocks=knocks+1 WHERE room_id=? AND user_id=?').run(roomId, target);
        let msg = Math.max(0, Math.min(20, parseInt(body.msg, 10) || 0));
        if(lastKnock.get(target) === msg) msg = (msg + 1) % 20;
        lastKnock.set(target, msg);
        const tu = userRow(target);
        note([target], 'n.knocked', { name: me.name, target: tu ? tu.name : '', msg, room: room.name }, 'knock');
      }
      syncRoom(roomId);
      return send(res, 200, { ok: true });
    }
  }
  return fail(res, 404, 'not_found');
}

const server = http.createServer((req, res) => {
  let pathname = '/';
  try{ pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname); }catch(e){ return fail(res, 400, 'bad_url'); }
  if(pathname.startsWith('/api/')){
    api(req, res, pathname).catch(err => { console.error(err); if(!res.headersSent) fail(res, 500, 'server'); });
    return;
  }
  if(req.method !== 'GET' && req.method !== 'HEAD') return fail(res, 405, 'method');
  serveStatic(req, res, pathname);
});
server.keepAliveTimeout = 65000;
server.listen(PORT, () => {
  botIds();
  housekeeping();
  console.log('Poo-riend on http://localhost:' + PORT + '  (data: ' + DATA_DIR + ')');
});
setInterval(botTick, 6000);
setInterval(housekeeping, 30 * 60e3);
