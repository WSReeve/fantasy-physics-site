<script>
var isLoggedIn = <?php print is_user_logged_in() ? 'true' : 'false'; ?>;
var redirectTo = '<?php print is_user_logged_in() ? admin_url( '/' ) : 'http://localhost'; ?>';
</script>
