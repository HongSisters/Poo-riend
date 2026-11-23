/* Supabase Auth adapter for Poo-riend.
   Load order in index.html:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="supabase-auth.js"></script>
     <script src="app.js"></script>
   Fill in SUPABASE_URL / SUPABASE_ANON_KEY and loadState(). */
(function(){
  var SUPABASE_URL = 'https://jmytbjqipxqklxvkccqh.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_cyNibKneWY6-36Ty7iWd2w_18PlLG2A';
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.sb = sb;

  /* Map Supabase errors to the app's err.* keys */
  function fail(e){
    var m = String((e && e.message) || '').toLowerCase();
    var code = 'server';
    if(/already registered|already been registered|user already exists/.test(m)) code = 'email_taken';
    else if(/invalid login credentials/.test(m)) code = 'bad_login';
    else if(/email not confirmed/.test(m)) code = 'not_confirmed';
    else if(/password/.test(m)) code = 'bad_password';
    else if(/email/.test(m)) code = 'bad_email';
    else if(/rate limit|too many/.test(m)) code = 'slow_down';
    var err = new Error(code); err.code = code; throw err;
  }

  /* Return the app state ({user, rooms, notifications, ...}) from the poo_api() function in the database.
     It also creates the profile with the nickname given at sign-up. */
  function loadState(session){
    return sb.rpc('poo_api', {p_method:'GET', p_path:'/api/state', p_body:{}}).then(function(r){
      if(r.error || !r.data || r.data.error){ console.error('state', r.error || r.data); var e = new Error('server'); e.code = 'server'; throw e; }
      return r.data;
    });
  }

  window.POO_AUTH = {
    signUp: function(b){
      return sb.auth.signUp({
        email:b.email, password:b.password,
        options:{data:{name:b.name}, emailRedirectTo:location.origin + location.pathname}
      }).then(function(r){
        if(r.error) fail(r.error);
        if(!r.data.session) return {needsConfirm:true};   /* email confirmation is on */
        return loadState(r.data.session);
      });
    },
    signIn: function(b){
      return sb.auth.signInWithPassword({email:b.email, password:b.password}).then(function(r){
        if(r.error) fail(r.error);
        return loadState(r.data.session);
      });
    },
    resetPassword: function(b){
      return sb.auth.resetPasswordForEmail(b.email, {redirectTo:location.origin + location.pathname}).then(function(r){
        if(r.error) fail(r.error);
        return {ok:true};
      });
    }
  };
})();
