<!DOCTYPE html>
<html lang="en">
<head>
	<title>Assignment 1 title | About Us</title>
    <meta charset="utf-8" />
    <meta name="description" content="About Us" />
	<meta name="author" content="PUt the content;" />
	<meta name="keywords" content="html, css, laptop and computers, corporation, about, history, team" />
    <link href="styles/style.css" rel="stylesheet" />
</head>
<body>
	<main>
		<?php include "includes/navbar.inc" ?>

    	<?php include "includes/header-small.inc" ?>

        <section class="section1">
        <h1>Receipt</h1>
        <?php
        session_start();
        if ($_SESSION["firstname"] !="") {
            echo "<h1>Customer Details</h1>";
            echo "<p> First Name:".$_SESSION["fname"]."</p>" ;}
        else{
            header("location:payment.php");
        }
        require_once('settings.php');
        $conn = @mysqli_connect($host , $user , $pwd , $sql_db);
        
        if(!$conn)
        echo "<p>Data connection failure</p>";
        else{
            $sql_table="orders";
            $insert= "SELECT order_id, order_time FROM $sql_table ORDER BY order_id DESC";
            $result = mysqli_query($conn, $insert);
            $id = mysqli_fetch_assoc($result);
        }

        
        
        ?>  
        
        <p> Last Name: <?php echo $_SESSION["lname"]?></p>
        <p> Email: <?php echo $_SESSION["email"]?></p>
        <p> Street: <?php echo $_SESSION["street"]?> </p>
        <p> Suburb: <?php echo $_SESSION["suburb"]?></p>
        <p> State: <?php echo $_SESSION["state"]?></p>
        <p> Postcode: <?php echo $_SESSION["code"]?></p>
        <p> Phone Number: <?php echo $_SESSION["phone"]?> </p>
        <p> Contact Preference: <?php echo $_SESSION["contact"]?></p>
        
        <br>
        <br>
        <h1> Credit Card Details</h1>
        <p> Credit Type: <?php echo $_SESSION["credit_type"]?> </p>
        <p> Credit Name: <?php echo $_SESSION["credit_name"]?></p>
        <p> Credit Number: <?php echo $_SESSION["credit_number"]?></p>
        <p> Credit Expiry Date: <?php echo $_SESSION["expiry"]?></p>
        <p> CVV: <?php echo $_SESSION["cvv"]?></p>
        <br>
        <br>

        <p> Order ID: <?php echo $id["order_id"]?></p>
        <p> Order Status:<?php echo $_SESSION["order_status"]?></p>
        <p> Order Cost: £<?php echo $_SESSION["order_cost"]?></p>
        <p> Order Time: <?php echo $id["order_time"]?></p>


        
    </section>

    </main>

    <?php include "includes/footer.inc" ?>
</html>