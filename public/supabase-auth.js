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

  /* Map Supabase errors to the app's err.* keys (error code first, then the message) */
  function fail(e){
    var c = String((e && e.code) || '').toLowerCase();
    var m = String((e && e.message) || '').toLowerCase();
    var code = 'server';
    if(/rate_limit/.test(c) || /rate limit|too many|security purposes/.test(m)) code = /email/.test(c + m) ? 'mail_limit' : 'slow_down';
    else if(c === 'user_already_exists' || c === 'email_exists' || /already registered|already been registered|already exists/.test(m)) code = 'email_taken';
    else if(c === 'invalid_credentials' || /invalid login credentials/.test(m)) code = 'bad_login';
    else if(c === 'email_not_confirmed' || /email not confirmed/.test(m)) code = 'not_confirmed';
    else if(c === 'email_address_not_authorized' || /not authorized/.test(m)) code = 'mail_blocked';
    else if(c === 'signup_disabled' || /signups? not allowed|signup.*disabled/.test(m)) code = 'signup_off';
    else if(c === 'weak_password' || /password/.test(m)) code = 'bad_password';
    else if(c === 'email_address_invalid' || /invalid format|invalid email|email address.*invalid/.test(m)) code = 'bad_email';
    console.error('supabase auth:', e);
    var err = new Error(code); err.code = code; err.raw = (e && e.message) || ''; throw err;
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
      return sb.rpc('pr_nick_taken', {n:b.name}).then(function(r){
        if(!r.error && r.data === true){ var e = new Error('nick_taken'); e.code = 'nick_taken'; throw e; }
        return sb.auth.signUp({
          email:b.email, password:b.password,
          options:{data:{name:b.name}, emailRedirectTo:location.origin + location.pathname}
        });
      }).then(function(r){
        if(r.error) fail(r.error);
        var u = r.data && r.data.user;
        if(u && Array.isArray(u.identities) && u.identities.length === 0){ var e = new Error('email_taken'); e.code = 'email_taken'; throw e; }
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
    resend: function(b){
      return sb.auth.resend({type:'signup', email:b.email, options:{emailRedirectTo:location.origin + location.pathname}}).then(function(r){
        if(r.error) fail(r.error);
        return {ok:true};
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
