/* Poo-riend preview mock — runs the server API in the browser (memory only).
   Loaded before app.js only in the artifact preview; the real build talks to server.js. */
(function(){
  'use strict';
  var PUSH_GOAL = 10, now = function(){ return Date.now(); };
  var db = {users:{}, rooms:{}, members:[], active:[], records:[], notes:[], me:null, seq:1};
  var listeners = {};   // event -> [fn]
  function id(p){ return p + Math.random().toString(36).slice(2, 10); }
  function code(){ var A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', c = 'POO-'; for(var i=0;i<4;i++) c += A[Math.floor(Math.random() * A.length)]; return c; }
  function memberIds(rid){ return db.members.filter(function(m){ return m.room === rid; }).map(function(m){ return m.user; }); }
  function act(rid, uid){ for(var i=0;i<db.active.length;i++){ var a = db.active[i]; if(a.room === rid && a.user === uid) return a; } return null; }
  function fire(ev, data){ (listeners[ev] || []).forEach(function(fn){ try{ fn({data:JSON.stringify(data || {})}); }catch(e){} }); }
  function sync(rid){ if(db.me && memberIds(rid).indexOf(db.me) >= 0) setTimeout(function(){ fire('sync', {room:rid}); }, 30); }
  function note(uids, key, vars, fx){
    uids.forEach(function(u){
      if(!db.users[u] || db.users[u].kind === 'bot') return;
      var nid = db.seq++;
      db.notes.push({id:nid, user:u, key:key, vars:vars, at:now(), read:false});
      if(u === db.me) setTimeout(function(){ fire('note', {id:nid, key:key, vars:vars, fx:fx, at:now()}); }, 40);
    });
  }
  function state(){
    var u = db.users[db.me];
    var rooms = db.members.filter(function(m){ return m.user === db.me; }).sort(function(a, b){ return a.joined - b.joined; }).map(function(m){
      var r = db.rooms[m.room];
      return {id:r.id, name:r.name, code:r.code, ownerId:r.owner, hue:r.hue, door:r.door || 'plain', demo:true,
        members:db.members.filter(function(x){ return x.room === r.id; }).sort(function(a, b){ return a.joined - b.joined; })
          .map(function(x){ var uu = db.users[x.user]; return {id:uu.id, name:uu.name, poo:uu.poo, bot:uu.kind === 'bot'}; }),
        sessions:db.active.filter(function(a){ return a.room === r.id; }).map(function(a){
          return {userId:a.user, stall:a.stall, startedAt:a.started, mode:a.mode, push:a.push, cheers:a.cheers, knocks:a.knocks || 0, relieved:a.relieved}; }),
        records:db.records.filter(function(x){ return x.room === r.id; }).map(function(x){
          return {userId:x.user, start:x.start, end:x.end, seconds:x.seconds, kind:x.kind}; })};
    });
    var notes = db.notes.filter(function(n){ return n.user === db.me; }).sort(function(a, b){ return b.at - a.at; }).slice(0, 50)
      .map(function(n){ return {id:n.id, key:n.key, vars:n.vars, at:n.at, read:n.read}; });
    return {user:{id:u.id, name:u.name, handle:u.handle || '', email:u.email || '', kind:u.kind, poo:u.poo, best:u.best}, rooms:rooms, notifications:notes, pushGoal:PUSH_GOAL, serverTime:now()};
  }
  function enter(rid, uid, mode){
    if(act(rid, uid)) return false;
    var st = Math.max(0, memberIds(rid).indexOf(uid));
    db.active.push({room:rid, user:uid, stall:st, started:now(), mode:mode, push:0, cheers:0, knocks:0, relieved:false});
    var others = memberIds(rid).filter(function(x){ return x !== uid; });
    var v = {name:db.users[uid].name, room:db.rooms[rid].name};
    if(mode === 'loose') note(others, 'n.urgent', v, 'siren'); else note(others, mode === 'hard' ? 'n.enteredHard' : 'n.entered', v, 'enter');
    sync(rid); return true;
  }
  function flush(rid, uid){
    var a = act(rid, uid); if(!a) return null;
    var sec = Math.max(1, Math.round((now() - a.started) / 1000));
    db.active.splice(db.active.indexOf(a), 1);
    db.records.push({room:rid, user:uid, start:a.started, end:now(), seconds:sec, kind:a.mode});
    sync(rid); return {seconds:sec, kind:a.mode};
  }
  function push(rid, uid, n){
    var a = act(rid, uid); if(!a || (a.mode !== 'hard' && a.mode !== 'loose') || a.relieved) return a;
    a.push = Math.min(PUSH_GOAL, a.push + n);
    if(a.push >= PUSH_GOAL){ a.relieved = true; note(memberIds(rid), a.mode === 'loose' ? 'n.relievedLoose' : 'n.relieved', {name:db.users[uid].name, room:db.rooms[rid].name}, 'relief'); }
    return a;
  }
  function seed(rid, uids){
    var d0 = new Date(), y = d0.getFullYear(), m = d0.getMonth();
    for(var d=1; d<=d0.getDate(); d++) uids.forEach(function(u){
      var roll = Math.random(), n = roll < .34 ? 0 : roll < .8 ? 1 : roll < .94 ? 2 : 3;
      for(var k=0;k<n;k++){
        var st = new Date(y, m, d, 6 + Math.floor(Math.random() * 16), Math.floor(Math.random() * 60)).getTime();
        var kr = Math.random(), kind = (n >= 3 && k === 0) ? 'loose' : kr < .13 ? 'hard' : kr < .22 ? 'loose' : 'normal';
        var sec = kind === 'hard' ? 600 + Math.floor(Math.random() * 900) : kind === 'loose' ? 40 + Math.floor(Math.random() * 180) : 90 + Math.floor(Math.random() * 460);
        if(st + sec * 1000 < now()) db.records.push({room:rid, user:u, start:st, end:st + sec * 1000, seconds:sec, kind:kind});
      }
    });
  }
  function newUser(name, kind, handle){
    var u = {id:id(kind === 'bot' ? 'bot' : 'u'), name:name, handle:handle || null, kind:kind, poo:{shape:'classic', thick:1, hat:'beanie'}, best:0};
    db.users[u.id] = u; return u;
  }
  function makeDemo(name, roomName, extraNames){
    var me = newUser(name, 'guest');
    db.me = me.id;
    var rid = id('r');
    db.rooms[rid] = {id:rid, name:roomName, code:code(), owner:me.id, hue:28, door:'moon'};
    var bots = [['명수', {shape:'tall', thick:2, hat:'cap', toilet:'wood', prop:'plant', acc:'scarf'}], ['영케', {shape:'round', thick:0, hat:'bow', toilet:'fluffy', prop:'clock', acc:'balloon'}],
      ['험프티덤프티', {shape:'flat', thick:2, hat:'tophat', toilet:'throne', prop:'duck', acc:'tie'}], ['이안', {shape:'tip', thick:1, hat:'hardhat', toilet:'black', prop:'radio', acc:'coffee'}],
      ['비욘세', {shape:'tall', thick:0, hat:'crown', toilet:'gold', prop:'frame', acc:'mic'}], ['톰홀랜드', {shape:'classic', thick:2, hat:'cap', toilet:'heart', prop:'phone', acc:'umbrella'}],
      ['홍빵진', {shape:'classic', thick:1, hat:'chef', toilet:'mint', prop:'book', acc:'bandana'}], ['신방동불주먹', {shape:'flat', thick:2, hat:'beanie', toilet:'stripe', prop:'lamp', acc:'plunger'}],
      ['참외씨', {shape:'round', thick:1, hat:'propeller', toilet:'ocean', prop:'candle', acc:'pinwheel'}]]
      .map(function(b){ var u = newUser(b[0], 'bot'); u.poo = b[1]; return u.id; });
    db.members.push({room:rid, user:me.id, joined:now()});
    var crew1 = [bots[0], bots[1], bots[2], bots[3]];   // 명수, 영케, 험프티덤프티, 이안
    crew1.forEach(function(b, i){ db.members.push({room:rid, user:b, joined:now() + i + 1}); });
    seed(rid, [me.id].concat(crew1));
    db.active.push({room:rid, user:bots[0], stall:1, started:now() - 7 * 60e3, mode:'hard', push:4, cheers:1, knocks:2, relieved:false});
    plan[rid + ':' + bots[0]] = 200;
    var extra = (extraNames || []).slice(1, 3);
    /* the other two toilets belong to someone else: owner joins first, I join last */
    [[extra[0] || '가속기 3층', 200, 'planks', [bots[4], bots[5]]], [extra[1] || '우리집 똥간', 140, 'window', [bots[6], bots[7], bots[8]]]].forEach(function(x, k){
      var r2 = id('r');
      db.rooms[r2] = {id:r2, name:x[0], code:code(), owner:x[3][0], hue:x[1], door:x[2]};
      x[3].forEach(function(b, i){ db.members.push({room:r2, user:b, joined:now() - 1000 + i}); });
      db.members.push({room:r2, user:me.id, joined:now()});
      seed(r2, [me.id].concat(x[3]));
      if(k === 0) db.active.push({room:r2, user:x[3][1], stall:2, started:now() - 3 * 60e3, mode:'normal', push:0, cheers:0, knocks:0, relieved:false});
      if(k === 1) db.active.push({room:r2, user:x[3][2], stall:3, started:now() - 2 * 60e3, mode:'loose', push:2, cheers:0, knocks:1, relieved:false});
    });
    return state();
  }
  var plan = {};
  setInterval(function(){
    if(!db.me) return;
    Object.keys(db.rooms).forEach(function(rid){
      var mine = act(rid, db.me);
      if(mine && Math.random() < .25){
        var bs = memberIds(rid).filter(function(u){ return db.users[u].kind === 'bot'; });
        var who = db.users[bs[Math.floor(Math.random() * bs.length)]];
        if(Math.random() < .5){
          mine.knocks = (mine.knocks || 0) + 1;
          note([db.me], 'n.knocked', {name:who.name, target:db.users[db.me].name, msg:(function(){ var m = Math.floor(Math.random() * 20); if(m === db.lastKnock) m = (m + 1) % 20; db.lastKnock = m; return m; })(), room:db.rooms[rid].name}, 'knock');
        } else {
          mine.cheers++; if((mine.mode === 'hard' || mine.mode === 'loose') && !mine.relieved) push(rid, db.me, 3);
          note([db.me], 'n.cheered', {name:who.name, room:db.rooms[rid].name}, 'cheer');
        }
        sync(rid);
      }
      memberIds(rid).filter(function(u){ return db.users[u].kind === 'bot'; }).forEach(function(b){
        var a = act(rid, b), key = rid + ':' + b;
        if(a){
          var el = (now() - a.started) / 1000;
          if((a.mode === 'hard' || a.mode === 'loose') && !a.relieved && Math.random() < .3){ push(rid, b, 1); sync(rid); }
          if(el > (plan[key] || 120) && ((a.mode !== 'hard' && a.mode !== 'loose') || a.relieved)){ flush(rid, b); delete plan[key]; }
        } else if(Math.random() < .05){
          var r = Math.random(), mode = r < .68 ? 'normal' : r < .86 ? 'hard' : 'loose';
          plan[key] = mode === 'loose' ? 35 + Math.random() * 40 : 70 + Math.random() * 150;
          enter(rid, b, mode);
        }
      });
    });
  }, 6000);

  function route(method, path, body){
    var ok = function(o){ return [200, o]; }, err = function(c, e){ return [c, {error:e}]; };
    if(path === '/api/state') return db.me ? ok(state()) : err(401, 'login');
    if(path === '/api/demo' || path === '/api/login' || path === '/api/signup'){
      if(path !== '/api/demo' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email || '')) return err(400, 'bad_email');
      var st = makeDemo(body.name || (path === '/api/signup' ? '' : String(body.email || '').split('@')[0]) || '도윤', body.roomName || '회사 화장실', body.roomNames);
      if(body.email){ db.users[db.me].email = body.email; st.user.email = body.email; }
      return ok(st);
    }
    if(path === '/api/reset'){
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email || '') ? ok({ok:true}) : err(400, 'bad_email');
    }
    if(!db.me) return err(401, 'login');
    var me = db.users[db.me];
    if(path === '/api/logout' || (path === '/api/me' && method === 'DELETE')){ db.me = null; return ok({ok:true}); }
    if(path === '/api/me/poo'){ me.poo = body; return ok({ok:true}); }
    if(path === '/api/me/name'){ me.name = String(body.name || '').slice(0, 12); return ok({ok:true}); }
    if(path === '/api/me/best'){ me.best = Math.max(me.best, body.score | 0); return ok({best:me.best}); }
    if(path === '/api/notifications' && method === 'DELETE'){ db.notes = db.notes.filter(function(n){ return n.user !== db.me; }); return ok({ok:true}); }
    var nmm = path.match(/^\/api\/notifications\/(\d+)$/);
    if(nmm && method === 'DELETE'){ db.notes = db.notes.filter(function(n){ return !(n.user === db.me && String(n.id) === nmm[1]); }); return ok({ok:true}); }
    if(path === '/api/notifications/read'){ db.notes.forEach(function(n){ if(n.user === db.me) n.read = true; }); return ok({ok:true}); }
    if(path === '/api/rooms' && method === 'POST'){
      var rid = id('r'); db.rooms[rid] = {id:rid, name:String(body.name).slice(0, 20), code:code(), owner:db.me, hue:null};
      db.members.push({room:rid, user:db.me, joined:now()}); return ok({id:rid, code:db.rooms[rid].code});
    }
    if(path === '/api/rooms/join'){
      var c = String(body.code || '').toUpperCase(); if(/^[A-Z0-9]{4}$/.test(c)) c = 'POO-' + c;
      for(var k in db.rooms){ if(db.rooms[k].code === c){ if(memberIds(k).indexOf(db.me) < 0) db.members.push({room:k, user:db.me, joined:now()}); return ok({id:k}); } }
      return err(404, 'no_room');
    }
    var m = path.match(/^\/api\/rooms\/([A-Za-z0-9]+)(?:\/([a-z]+))?$/);
    if(m){
      var rid2 = m[1], a = m[2] || '', room = db.rooms[rid2];
      if(!room) return err(404, 'no_room');
      if(!a && method === 'PATCH'){ if(body.name) room.name = body.name; if(body.door) room.door = body.door; if(body.hue !== undefined) room.hue = body.hue === null ? null : body.hue; sync(rid2); return ok({ok:true}); }
      if(!a && method === 'DELETE'){ db.members = db.members.filter(function(x){ return x.room !== rid2; }); delete db.rooms[rid2]; return ok({ok:true}); }
      if(a === 'leave'){ db.members = db.members.filter(function(x){ return !(x.room === rid2 && x.user === db.me); }); return ok({ok:true}); }
      if(a === 'enter') return enter(rid2, db.me, body.mode || 'normal') ? ok({ok:true}) : err(409, 'already_in');
      if(a === 'flush'){ var f = flush(rid2, db.me); return f ? ok(f) : err(409, 'not_in'); }
      if(a === 'push'){ var s = push(rid2, db.me, Math.min(12, body.n | 0)); sync(rid2); return s ? ok({push:s.push, relieved:s.relieved, goal:PUSH_GOAL}) : err(409, 'not_in'); }
      if(a === 'mode'){ var s2 = act(rid2, db.me); if(s2){ s2.mode = body.mode; s2.push = 0; s2.relieved = false; } sync(rid2); return ok({ok:true}); }
      if(a === 'cheer' || a === 'knock'){
        var tgt = act(rid2, body.userId); if(!tgt) return err(409, 'not_in');
        if(a === 'cheer'){ tgt.cheers++; if((tgt.mode === 'hard' || tgt.mode === 'loose') && !tgt.relieved) push(rid2, body.userId, 3); } else { tgt.knocks = (tgt.knocks || 0) + 1; }
        sync(rid2); return ok({ok:true});
      }
    }
    return err(404, 'not_found');
  }

  var realFetch = window.fetch ? window.fetch.bind(window) : null;
  window.fetch = function(url, opt){
    var u = String(url);
    if(u.indexOf('/api/') !== 0) return realFetch(url, opt);
    opt = opt || {};
    var body = {}; try{ body = opt.body ? JSON.parse(opt.body) : {}; }catch(e){}
    var res = route((opt.method || 'GET').toUpperCase(), u.split('?')[0], body);
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve({ok:res[0] < 400, status:res[0], json:function(){ return Promise.resolve(JSON.parse(JSON.stringify(res[1]))); }});
      }, 60);
    });
  };
  window.EventSource = function(){
    var self = this; this.readyState = 1;
    setTimeout(function(){ if(self.onopen) self.onopen(); }, 50);
  };
  window.EventSource.prototype.addEventListener = function(ev, fn){ (listeners[ev] = listeners[ev] || []).push(fn); };
  window.EventSource.prototype.close = function(){ listeners = {}; this.readyState = 2; };
})();
