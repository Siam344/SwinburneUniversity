<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="description" content="Assignment Enquiries Page" />
  <meta name="keywords"    content="HTML" />
  <meta name="author"      content="Hridita Dewan" />
  <title>Manager Login</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylesheet/style.css">
</head>

<?php include("includes/header.inc"); ?>
<body>
<?php include("includes/menu.inc"); ?>
<!-- log in page for manager to login using their account, manager can only access by logged user -->
<?php
			//username: admin, password: p
			if (isset($_POST['login']))
				{
					$username = mysqli_real_escape_string($con, $_POST['username']);
					$password = mysqli_real_escape_string($con, $_POST['password']);
					$query 		= mysqli_query($con, "SELECT * FROM users WHERE 'password' = '$password' and username ='$username'");
					$row		= mysqli_fetch_array($query);
					$num_row 	= mysqli_num_rows($query);
					
					if ($num_row > 0) 
						{			
							$_SESSION['id']=$row['id'];
							header('location:manage.php'); //Redirect to manage
						}
					else
						{
							echo 'Invalid Username and Password Combination'; // Error message
						}
				}
		?>

	<section id="login-form">
		<div class="gym-box-grey">
				<h3>Manager Login Portal</h3>
			</div>
		<div class="box meal-box-yellow">
			<form action="#" method="post">
			
			<div class="form-login">
				<input type="text" name="username" required="required" placeholder="Username" size="50" autofocus required></input> <br><br>
			</div>
			
			<div class="form-login">
				<input type="password" name="password" required="required" placeholder="Password" size="50" required></input>
			</div>
			
			<div class = "btnLogin">

						<a href="manage.php"><input type="submit" name = "login" value="Login" class="submitbtn-login"></a>						<!-- Log in -->
						<input type="reset" value="Reset" class="resetbtn-delete">

					</div>
		</form>
		</div>
	</section>


<?php
	include_once "includes/footer.inc";
?>

</body>
