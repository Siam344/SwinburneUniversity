<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="description" content="Assignment Enquiries Page" />
  <meta name="keywords"    content="HTML" />
  <meta name="author"      content="Hridita Dewan, Nur E Siam, Aiden Large" />
  <title>Laptop Receipt</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylesheet/style.css">
</head>

<?php include("header.inc"); ?>			<!-- header.inc to display header -->

<body>
	<section class="content" id="receipt">
        <h1>Receipt</h1>
        <?php
		session_start();
		if(!isset($_SESSION["db_msg"])){
	    header('location:payment.php');
	    exit;
	    }
		require_once "settings.php";
		$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
        if (!$conn) {
			echo "<p>Database connection failure</p>";
		} else {
            $sql_table="orders";
            $insert= "SELECT order_id, order_date FROM $sql_table 
			          ORDER BY order_id DESC";
            $result = mysqli_query($conn, $insert);
            $id = mysqli_fetch_assoc($result);
		}
        ?>
		
        <h2> Order Details </h2>
		<p> Order ID: <?php echo $id["order_id"]; ?> </p>
		<p> Order Status: PENDING </p>
		<p> Order Time: <?php echo $id["order_date"]; ?> </p>
		<p> Product: <?php echo $_SESSION["purchases"]?></p>
		<p> Cost: $<?php echo $_SESSION["total_cost"]?></p>
		
		<br>
		
		<h2> Personal Details </h2>
		<p> First Name: <?php echo $_SESSION["fname"]?></p>
        <p> Last Name: <?php echo $_SESSION["lname"]?></p>
        <p> Email: <?php echo $_SESSION["email"]?></p>
        <p> Street: <?php echo $_SESSION["address"]?> </p>
        <p> Suburb: <?php echo $_SESSION["suburb"]?></p>
        <p> State: <?php echo $_SESSION["state"]?></p>
        <p> Postcode: <?php echo $_SESSION["postcode"]?></p>
        <p> Phone Number: <?php echo $_SESSION["phoneno"]?> </p>
        <p> Prefered Contact: <?php echo $_SESSION["prefcont"]?></p>

        <br>
        
        <h2> Credit Card Details</h2>
        <p> Credit Type: <?php echo $_SESSION["credit_type"]?> </p>
        <p> Credit Name: <?php echo $_SESSION["credit_name"]?></p>
        <p> Credit Number: <?php echo $_SESSION["credit_number"]?></p>
        <p> Credit Expiry Date: <?php echo $_SESSION["expiry"]?></p>
        <p> CVV: <?php echo $_SESSION["cvv"]?></p>
        <br>
        <br>

        
    </section>

    </main>
	
	<?php session_unset(); ?>

    <?php include "footer.inc" ?>
</html>