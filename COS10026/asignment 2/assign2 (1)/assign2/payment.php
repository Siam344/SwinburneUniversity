<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="description" content="Assignment Enquiries Page" />
  <meta name="keywords"    content="HTML" />
  <meta name="author"      content="Hridita Dewan, Aiden Large" />
  <title>Order Laptop</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylesheet/style.css">

</head>

<body class="enquire">
    
<?php
	
	include_once('header.inc');
?>
  
   <br />
  
   <h1>Order</h1>
   <form method="post" action="process_order.php" novalidate>
	 
     
   <label for="fname">First Name</label>
   <input type="text" name="fname" id="fname" maxlength="25"/>

   <label for="lname">Last Name</label>
   <input type="text" name= "lname" id="lname" maxlength="25"/>

   <label for="email1">Email</label>
   <input type="email" name= "email" id="email1"/>
	
	<br />
  
    <fieldset>
      <legend>Address</legend>
  
      <p>
        <label for="street">Street name:</label>
        <input type="text" name="street" id="street" required="required" maxlength="40" />
      </p>	
      <p>
	    <label for="town">Suburb/town:</label>
	    <input type="text" name="town" id="town" required="required" maxlength="20" />
      </p>	
	  <p>
	    <label for="state">State:</label>
	    <select name="state" id="state" required="required">
          <option value="">Select State</option>
	      <option value="VIC">VIC</option>
	      <option value="NSW">NSW</option>
          <option value="QLD">QLD</option>
		  <option value="NT">NT</option>
		  <option value="WA">WA</option>
		  <option value="SA">SA</option>
		  <option value="TAS">TAS</option>
		  <option value="ACT">ACT</option>
	    </select>
	  </p>
	  <p>
	    <label for="postcode">Postcode:</label>
	    <input type="text" name="postcode" id="postcode" required="required" maxlength="4" pattern="[0-9]{4}" />
	  </p>
    </fieldset>
  
    <br />
  
    <p>
      <label for="phone">Phone number:</label>
      <input type="text" name="phone" id="phone" required="required" maxlength="10" pattern="[0-9]{0,10}" placeholder="phone number" />
    </p>
    <p>
      <label>Preferred contact:</label>
	  <br />
	  <label><input type="radio" name="prefcont" value="email" required="required" />Email</label>
	  <label><input type="radio" name="prefcont" value="post" />Post</label>
	  <label><input type="radio" name="prefcont" value="phone" />Phone</label>
    </p>
    <p>
	  <label for="product">Product:</label>
	  <select name="product" id="product" required="required">
        <option value="">Select Product</option>
	    <option value="Laptop 1">Laptop 1</option>
	    <option value="Laptop 2">Laptop 2</option>
        <option value="Laptop 3">Laptop 3</option>
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
	    <textarea name="comments" rows="5" cols="30" placeholder="Write any extra comments here..."></textarea>
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

    <?php include('footer.inc');?>
	
</body>
</html>

 