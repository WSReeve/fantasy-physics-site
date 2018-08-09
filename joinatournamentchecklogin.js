<script>
var isLoggedIn = <?php print is_user_logged_in ? 'true' : 'false'; ?>;
 if ( is_user_logged_in === true ) {
   window.location.href = "joinatournament.html";
}
   if ( is_user_logged_in === false ) {
    window.location.href = "login.html";
}
</script>
