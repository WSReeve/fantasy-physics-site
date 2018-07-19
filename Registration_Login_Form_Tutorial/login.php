<?php
session_start();

if(isset($_SESSION['sig']))
{
	#User is already logged in
	echo("<script>window.location='home.php'</script>");	
}

#Check if the login form was submitted
if(isset($_REQUEST['submit']))
{
	#Perform login action
	$username=$_REQUEST['UserUsername'];
	$password=$_REQUEST['UserPassword'];
	
	include('db_login.php');
	$query=mysql_query("SELECT * FROM Users WHERE UserUsername='".$username."' AND UserPassword='".$password."'");	
	$row=mysql_fetch_array($query);
	if(empty($row))
	{
		#False Info / User doesn't exist
		echo('<script>alert("False login credentials!");</script>');
	}
	else
	{
		#User exists and login is successful	
		$_SESSION['sig']="OK";
		echo('<script>window.location="home.php"</script>');
	}
}


?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Login</title>
</head>

<body>
<center>
<form method="post" action="login.php">

    <input name="UserUsername" type="text" placeholder="Enter your username...">
    <br>
    <input name="UserPassword" type="password" placeholder="Enter your password...">
    <br>
    <input type="submit" name="submit" value="Login">

</form>
</center>
</body>
</html>