<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="Fix payment" />
    <meta name="keywords" content="HTML5, PHP, MySQL" />
    <meta name="author" content="Hridita Dewan, Aiden Large"  />
    <title>Fix Order</title>
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet/style.css">
</head>
<body class="enquire">

<?php
    session_start();
    if(!isset($_SESSION["errMsg"])){
	header('location:payment.php');
	exit;
	}
?>
    
<?php
	
	include_once('header.inc');
?>
  
   <br />
  
   <h1>Order</h1>
   
   <div class="error">
       <p>
           <?php
		       echo $_SESSION["errMsg"];
           ?>
	   </p>
   </div>
   
   <form method="post" action="process_order.php" novalidate>
	 
     
   <label for="fname">First Name</label>
   <input type="text" name="fname" id="fname" maxlength="25" value="<?php echo $_SESSION["fname"]; ?>"/>

   <label for="lname">Last Name</label>
   <input type="text" name= "lname" id="lname" maxlength="25" value="<?php echo $_SESSION["lname"]; ?>"/>

   <label for="email1">Email</label>
   <input type="email" name= "email" id="email1" value="<?php echo $_SESSION["email"]; ?>"/>
	
	<br />
  
    <fieldset>
      <legend>Address</legend>
  
      <p>
        <label for="street">Street name:</label>
        <input type="text" name="street" id="street" required="required" maxlength="40" value="<?php echo $_SESSION["address"]; ?>"/>
      </p>	
      <p>
	    <label for="town">Suburb/town:</label>
	    <input type="text" name="town" id="town" required="required" maxlength="20" value="<?php echo $_SESSION["suburb"]; ?>"/>
      </p>	
	  <p>
	    <label for="state">State:</label>
	    <select name="state" id="state" required="required">
          <option value="">Select State</option>
	      <option <?php if ($_SESSION["state"] == "VIC" ) echo 'selected' ; ?> value="VIC">VIC</option>
		  <option <?php if ($_SESSION["state"] == "NSW" ) echo 'selected' ; ?> value="NSW">NSW</option>
		  <option <?php if ($_SESSION["state"] == "QLD" ) echo 'selected' ; ?> value="QLD">QLD</option>
		  <option <?php if ($_SESSION["state"] == "NT" ) echo 'selected' ; ?> value="NT">NT</option>
		  <option <?php if ($_SESSION["state"] == "WA" ) echo 'selected' ; ?> value="WA">WA</option>
		  <option <?php if ($_SESSION["state"] == "SA" ) echo 'selected' ; ?> value="SA">SA</option>
		  <option <?php if ($_SESSION["state"] == "TAS" ) echo 'selected' ; ?> value="TAS">TAS</option>
		  <option <?php if ($_SESSION["state"] == "ACT" ) echo 'selected' ; ?> value="ACT">ACT</option>
	    </select>
	  </p>
	  <p>
	    <label for="postcode">Postcode:</label>
	    <input type="text" name="postcode" id="postcode" required="required" maxlength="4" pattern="[0-9]{4}" value="<?php echo $_SESSION["postcode"]; ?>"/>
	  </p>
    </fieldset>
  
    <br />
  
    <p>
      <label for="phone">Phone number:</label>
      <input type="text" name="phone" id="phone" required="required" maxlength="10" pattern="[0-9]{0,10}" placeholder="phone number" value="<?php echo $_SESSION["phoneno"]; ?>"/>
    </p>
    <p>
      <label>Preferred contact:</label>
	  <br />
	  <label><input type="radio" name="prefcont" value="email" required="required" <?php if ($_SESSION["prefcont"] == "email" ) echo "checked" ; ?>/>Email</label>
	  <label><input type="radio" name="prefcont" value="post" <?php if ($_SESSION["prefcont"] == "post" ) echo "checked" ; ?>/>Post</label>
	  <label><input type="radio" name="prefcont" value="phone" <?php if ($_SESSION["prefcont"] == "phone" ) echo "checked" ; ?>/>Phone</label>
    </p>
    <p>
	  <label for="product">Product:</label>
	  <select name="product" id="product" required="required">
        <option value="">Select Product</option>
	    <option value="Laptop 1" <?php if ($_SESSION["purchases"] == "Laptop 1" ) echo 'selected' ; ?>>Laptop 1</option>
	    <option value="Laptop 2" <?php if ($_SESSION["purchases"] == "Laptop 2" ) echo 'selected' ; ?>>Laptop 2</option>
        <option value="Laptop 3" <?php if ($_SESSION["purchases"] == "Laptop 3" ) echo 'selected' ; ?>>Laptop 3</option>
	  </select>
    </p>
    <p>
      <label>Product features:</label>
	  <br />
	  <label><input type="checkbox" name="Feature[]" value="1" checked="checked" />Feature 1</label>
      <label><input type="checkbox" name="Feature[]" value="2" />Feature 2</label>
	  <label><input type="checkbox" name="Feature[]" value="3" />Feature 3</label>
    </p>
    <p>
	  <label>Additional comments (optional):<br />
	    <textarea name="comments" rows="5" cols="30" placeholder="Write any extra comments here..." value="<?php echo $_SESSION["comment"]; ?>"></textarea>
	  </label>
    </p>
    
    <div class="paymentDetails">
	    <fieldset><!-- Payment and card details -->	
	        <legend><strong>Payment details</strong></legend>
	            <p>	<!-- Card types -->
	                <label for="cardType">Card Type:</label><br>
	                <select name="cardType" id="cardType">
	                    <option value="none">Please select your card type</option>
	                    <option value="visa">Visa</option>	
	                    <option value="master">MasterCard</option>
	                    <option value="amex">American Express</option>
	                </select>
	            </p>	
	            <p>	<!-- Name on card -->
	                <label for="cardName">Name on Card:</label> <br>
	                <input type="text" name= "cardName" id="cardName" >
	            </p>
	            <p> <!-- Card number -->
	                <label for="cardNumber">Card Number:</label> <br>
	                <input type="text" name= "cardNumber" id="cardNumber" >
	            </p>
	            <p> <!-- Expiry date -->
	                <label for="cardExpiry">Card Expiry date:</label> <br>
	                <input type="text" name= "cardExpiry" id="cardExpiry" placeholder="mm/yy" >
	            </p>
	            <p> 
	                <label for="cardCVV">CVV:</label> <br>	<!-- Card CVV -->
	                <input type="text" name= "cardCVV" id="cardCVV" >
	            </p>
	    </fieldset>
	</div>
	<div class = "btnMargin">
	    <input type="submit" value="Check Out">	<!-- submit form to server -->
	    <input type="reset" value="Clear Details">
	</div>
	</form>
	
	<?php session_unset(); ?>

    <?php include('footer.inc');?>
	
</body>
</html>