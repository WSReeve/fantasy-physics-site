<?php
#Check if the user is logged in (Put this php code in all of your documents that require login)
session_start();
if(!isset($_SESSION['sig']))
{
	#go to the login page if sig doesn't exist in the SESSION array (i.e. the user is not logged in)
	echo('<script>window.location="login.php"</script>');		
}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Home Page</title>
</head>

<body>
<center>
<h1>Welcome to our system!</h1>
<br>
<a href="logout.php">Logout</a>
</center>

</body>
</html>