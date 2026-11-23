/* Poo-riend · Supabase bridge
   app.js still talks to "/api/..." and listens on EventSource("/api/stream").
   This file answers both from Supabase, so app.js needs no rewrite:
     - every /api/... call  -> sb.rpc('poo_api', {p_method, p_path, p_body})
     - /api/stream          -> Supabase Realtime on table pr_events (own rows only)
   Load order: supabase-js -> supabase-auth.js -> supabase-api.js -> app.js */
(function(){
  var sb = window.sb;
  if(!sb){ console.error('supabase-api.js: window.sb missing (load supabase-auth.js first)'); return; }

  function reply(status, obj){
    return new Response(JSON.stringify(obj), {status:status, headers:{'Content-Type':'application/json'}});
  }
  function session(){
    return sb.auth.getSession().then(function(r){ return (r && r.data && r.data.session) || null; });
  }

  /* ---------- /api/... over RPC ---------- */
  var realFetch = window.fetch.bind(window);
  window.fetch = function(input, init){
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    if(url.indexOf('/api/') !== 0) return realFetch(input, init);
    var method = ((init && init.method) || 'GET').toUpperCase();
    var body = {};
    try{ if(init && init.body) body = JSON.parse(init.body); }catch(e){}
    var path = url.split('?')[0];

    if(path === '/api/logout'){
      stopLive();
      return sb.auth.signOut().then(function(){ return reply(200, {ok:true}); }, function(){ return reply(200, {ok:true}); });
    }
    if(path === '/api/login' || path === '/api/signup' || path === '/api/demo') return Promise.resolve(reply(410, {error:'server'}));

    return session().then(function(s){
      if(!s) return reply(401, {error:'login'});
      return sb.rpc('poo_api', {p_method:method, p_path:path, p_body:body}).then(function(r){
        if(r.error){ console.error('poo_api', path, r.error); return reply(500, {error:'server'}); }
        var d = r.data || {};
        if(d.error) return reply(d.status || 400, {error:d.error});
        if(path === '/api/me' && method === 'DELETE'){ stopLive(); sb.auth.signOut(); }
        return reply(200, d);
      });
    }, function(){ return reply(500, {error:'network'}); });
  };

  /* ---------- /api/stream over Realtime ---------- */
  var RealES = window.EventSource;
  var live = null;
  function stopLive(){ if(live){ try{ live.close(); }catch(e){} } }

  function LiveStream(){
    var self = this, handlers = {}, channel = null, poll = null, closed = false;
    self.readyState = 0;
    self.onopen = null; self.onerror = null;
    self.addEventListener = function(type, fn){ (handlers[type] = handlers[type] || []).push(fn); };
    self.removeEventListener = function(type, fn){ handlers[type] = (handlers[type] || []).filter(function(f){ return f !== fn; }); };
    function fire(type, data){
      var ev = {type:type, data:JSON.stringify(data || {})};
      (handlers[type] || []).forEach(function(fn){ try{ fn(ev); }catch(e){ console.error(e); } });
    }
    self.close = function(){
      closed = true; self.readyState = 2;
      if(poll){ clearInterval(poll); poll = null; }
      if(channel){ try{ sb.removeChannel(channel); }catch(e){} channel = null; }
      if(live === self) live = null;
    };
    session().then(function(s){
      if(closed) return;
      if(!s){ self.readyState = 2; if(self.onerror) self.onerror({}); return; }
      try{ sb.realtime.setAuth(s.access_token); }catch(e){}
      channel = sb.channel('poo-' + s.user.id + '-' + Date.now())
        .on('postgres_changes', {event:'INSERT', schema:'public', table:'pr_events', filter:'user_id=eq.' + s.user.id}, function(p){
          var row = p && p.new; if(!row) return;
          fire(row.event, row.data);
        })
        .subscribe(function(status){
          if(closed) return;
          if(status === 'SUBSCRIBED'){
            self.readyState = 1;
            if(self.onopen) self.onopen({});
          } else if(status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED'){
            self.close();
            if(self.onerror) self.onerror({});   // app.js retries after 4 s
          }
        });
      /* safety net: refresh now and then even if a realtime message was missed */
      poll = setInterval(function(){ if(!document.hidden) fire('sync', {}); }, 20000);
    });
  }
  window.EventSource = function(url, opts){
    if(String(url).indexOf('/api/stream') === 0){ stopLive(); live = new LiveStream(); return live; }
    return new RealES(url, opts);
  };
  window.EventSource.CONNECTING = 0; window.EventSource.OPEN = 1; window.EventSource.CLOSED = 2;

  /* refresh the token used by realtime when Supabase renews the session */
  sb.auth.onAuthStateChange(function(ev, s){
    if(s && s.access_token){ try{ sb.realtime.setAuth(s.access_token); }catch(e){} }
  });
})();
