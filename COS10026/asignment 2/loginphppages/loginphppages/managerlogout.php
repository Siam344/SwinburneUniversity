<?php
//author: Hridita Dewan
//redirect users to the login page
//reference: https://www.sitepoint.com/community/t/need-help-with-a-php-login-application/323733/3
	session_start();
	session_destroy();
	header('location:managerlogin.php');
?>