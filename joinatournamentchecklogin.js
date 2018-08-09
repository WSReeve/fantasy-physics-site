<script>
var isLoggedIn = <?php print is_user_logged_in() ? 'true' : 'false'; ?>;
 if ( is_user_logged_in(true) )
    $location = admin_url( 'joinatournament.html' );
   if ( is_user_logged_in(false) )
    $location = admin_url( 'login.html' );
var redirectTo = '<?php print is_user_logged_in() ? admin_url( '/' ) : 'http://ldeng688.github.io/Fantasy-Physics/login.html'; ?>';
</script>
