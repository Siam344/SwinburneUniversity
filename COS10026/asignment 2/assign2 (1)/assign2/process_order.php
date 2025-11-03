<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="description" content="Assignment Enquiries Page" />
  <meta name="keywords"    content="HTML" />
  <meta name="author"      content="Hridita Dewan, Aiden Large" />
  <title>Laptop Enquiries</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="stylesheet/style.css">
</head>
<body>
	<?php
	//Prevent accessing directly from URL
	if(!isset($_SERVER['HTTP_REFERER'])){
	header('location:payment.php');	//redirect to enquire.php if attempted to access directly
	exit;
	} 
	//Sanitise input to avoid SQL injection
	function sanitise_input($data){
	$data = trim($data);	//remove spaces
	$data = stripslashes($data);	//remove backslashes in front of quotes
	$data = htmlspecialchars($data);	//convert HTML special characters to HTML code
	return $data;
	}

	$errMsg = "";	//Error message

	//First name validation
	$fname = sanitise_input($_POST["fname"]);	//sanitise input
	if (!preg_match("/^[a-zA-Z]{1,25}$/", $fname)) {
	$errMsg .= "<p class='align-center'>First name must contains only alphabetical characters and in between 1-25 characters length.</p>\n";
	}

	//Last name validation
	$lname = sanitise_input($_POST["lname"]);	//sanitise input
	if (!preg_match("/^[a-zA-Z]{1,25}$/", $lname)) {
	$errMsg .= "<p class='align-center'>Last name must contains only alphabetical characters and in between 1-25 characters length.</p>\n";
	}

	//Last name validation
	$email = sanitise_input($_POST["email"]);	//sanitise input
	if (!preg_match("/\S+@\S+\.\S+/", $email)) {
	$errMsg .= "<p class='align-center'>Your email must be in the format of something@something.something</p>\n";
	}

	//Address validation
	$address = sanitise_input($_POST["street"]);	//sanitise input
	if (!preg_match("/^[a-zA-Z0-9 ,.'-]{1,40}$/", $address)) {
	$errMsg .= "<p class='align-center'>Your address must contains only alphabetical characters, numbers, commas, dots and hyphens.</p>\n";
	}

	//Suburb validation
	$suburb = sanitise_input($_POST["town"]);	//sanitise input
	if (!preg_match("/^[a-zA-Z]{1,20}$/", $suburb)) {
	$errMsg .= "<p class='align-center'>Your suburb must contains only alphabetical characters and in between 1-20 characters length.</p>\n";
	}

	//State validation
	$state = sanitise_input($_POST["state"]);	//sanitise input
	if ($state == ""){	//if state has not been selected
	$errMsg .= "<p class='align-center'>You must select your state.</p>\n";
	}

	//postcode validation
	$postcode = sanitise_input($_POST["postcode"]);	//sanitise input
	if (!preg_match("/^\d{4}$/", $postcode)) {
	$errMsg .= "<p class='align-center'>Your post code must be a 4-digit number.</p>\n";
	}
	else{
	switch ($state){
	case "VIC":
	if ($postcode[0] != "3" && $postcode[0] != "8"){	//VIC post code must start with 3 or 8
	$errMsg .= "<p class='align-center'>VIC post code must start with 3 or 8.</p>\n";
	}
	break;
	case "NSW":
	if ($postcode[0] != "1" && $postcode[0] != "2"){	//NSW post code must start with 1 or 2
	$errMsg .= "<p class='align-center'>NSW post code must start with 1 or 2.</p>\n";
	}
	break;
	case "QLD":
	if ($postcode[0] != "4" && $postcode[0] != "9"){	//QLD post code must start with 4 or 9
	$errMsg .= "<p class='align-center'>QLD post code must start with 4 or 9.</p>\n";
	}
	break;
	case "WA":
	if ($postcode[0] != "6"){	//NA post code must start with 6
	$errMsg .= "<p class='align-center'>WA post code must start with 6.</p>\n";
	}
	break;
	case "SA":
	if ($postcode[0] != "5"){	//SA post code must start with 5
	$errMsg += "<p class='align-center'>SA post code must start with 5.</p>\n";
	}
	break;
	case "TAS":
	if ($postcode[0] != "7"){	//TAS post code must start with 7
	$errMsg += "<p class='align-center'>TAS post code must start with 7.</p>\n";
	}
	break;
	case "NT":
	case "ACT":
	if ($postcode[0] != "0"){	//NT and ACT post code must start with 0
	$errMsg += "<p class='align-center'>$state post code must start with 0.</p>\n";
	}
	break;
	}
	}

	//phoneno validation
	$phoneno = sanitise_input($_POST["phone"]);	//sanitise input
	if (!preg_match("/^\d{8,12}$/", $phoneno)) {
	$errMsg .= "<p class='align-center'>Your phone number must contains only numbers and in between 8-12 digits length .</p>\n";
	}


	//Feature validation

	
	$feature1 = sanitise_input($_POST["feature1"]);
    $feature2 = sanitise_input($_POST["feature2"]);
    $feature3 = sanitise_input($_POST["feature3"]);	//sanitise input
	
	//Products chosen validation
	$product = sanitise_input($_POST["product"]);	//sanitise input
	if ($product == ""){	//if state has not been selected
	$errMsg .= "<p class='align-center'>You have not chosen any product Please select a product</p>\n";
	}
	

	//Card type validation
	$cardType = sanitise_input($_POST["cardType"]);	//sanitise input
	if ($cardType == "none"){	//if state has not been selected
	$errMsg .= "<p class='align-center'>You must select your card type.</p>\n";
	}

	//Card name validation
	$cardName = sanitise_input($_POST["cardName"]);	//sanitise input
	if ($cardName == ""){
	$errMsg .= "<p class='align-center'>You must enter your name on card.</p>\n";
	}
	else if (!preg_match("/^[a-zA-Z ]{1,40}$/", $cardName)) {
	$errMsg .= "<p class='align-center'>Card name must contains only alphabetical characters and spaces and cannot exceed 40 characters length.</p>\n";
	}

	//Card number validation
	$cardNumber = sanitise_input($_POST["cardNumber"]);	//sanitise input
	if ($cardNumber == ""){	//if state has not been selected
	$errMsg .= "<p class='align-center'>You must enter your card number.</p>\n";
	}
	else{
	switch ($cardType){
	case "visa": //post code check for visa type
	if ($cardNumber[0] != "4"){	//check if first number is 4
	$errMsg .= "<p class='align-center'>Visa card number must start with 4.</p>\n";
	}
	else if (!preg_match("/^\d{16}$/", $cardNumber)){	//check if length is 16 and only contains numbers
	$errMsg .= "<p class='align-center'>Visa card number must be 16 digits and contains numbers only.</p>\n";
	}
	break;
	case "master": //post code check for mastercard type
	if (!($cardNumber[0] == "5" && ($cardNumber[1] >= 1 && $cardNumber[1] <= 5))){	//check if first 2 numbers are 51->55
	$errMsg .= "<p class='align-center'>MasterCard must start with digits \"51\" through to \"55\".</p>\n";
	}
	else if (!preg_match("/^\d{16}$/", $cardNumber)){	//check if length is 16 and only contains numbers
	$errMsg .= "<p class='align-center'>MasterCard number must be 16 digits and contains numbers only.</p>\n";
	}
	break;
	case "amex": //post code check for amex type
	if (!($cardNumber[0] == "3" && ($cardNumber[1] == "4" || $cardNumber[1] == "7"))){	//check if first 2 numbers are 34 or 37
	$errMsg .= "<p class='align-center'>American Express must start with \"34\" or \"37\".</p>\n";
	}
	else if (!preg_match("/^\d{15}$/", $cardNumber)){	//check if length is 15 and only contains numbers
	$errMsg .= "<p class='align-center'>MasterCard number must be 15 digits and contains numbers only.</p>\n";
	}
	break;
	}
	}

	//Card expiry date validation
	$cardExpiry = sanitise_input($_POST["cardExpiry"]);	//sanitise input
	if ($cardExpiry == ""){
	$errMsg .= "<p class='align-center'>Card expiry date cannot be left blank.</p>\n";	//Check if expiry date is left empty
	}
	else if (!preg_match("/^\d{2}\/\d{2}$/", $cardExpiry)){	//Check if expiry date is in the right format
	$errMsg .= "<p class='align-center'>Please enter expiry in the format of mm/yy.</p>\n";
	}
	else{	//Check if the card is expired
	$date = explode("/", $cardExpiry);
	$month = $date[0];
	$year = $date[1];
	$expires = \DateTime::createFromFormat('my', $month . $year);
	$now = new \DateTime();
	if ($expires < $now) {
	$errMsg .= "<p class='align-center'>Card is expired.</p>\n";
	}
	}

	//CVV validation
	$cardCVV = sanitise_input($_POST["cardCVV"]);	//sanitise input
	if ($cardCVV == ""){
	$errMsg .= "<p class='align-center'>Card CVV cannot be left blank.</p>\n";	//Check if CVV is left empty
	}
	else if (!preg_match("/^\d{3}$/", $cardCVV)){
	$errMsg .= "<p class='align-center'>CVV must be a 3-digit number.</p>\n";	//check if CVV is a 3-digit number
	}

	//Store preferred prefcont radio button
	$prefcont = sanitise_input($_POST["prefcont"]);	//sanitise input
	
	//Store comments
	$comment = sanitise_input($_POST["comments"]);	//sanitise input

 //If the data is not validated, display error message in fix_order.php
 if ($errMsg != "") {
 session_start();
	$_SESSION["errMsg"] = $errMsg;
	$_SESSION["fname"] = $fname;
	$_SESSION["lname"] = $lname;
	$_SESSION["email"] = $email;
	$_SESSION["address"] = $address;
	$_SESSION["suburb"] = $suburb;
	$_SESSION["state"] = $state;
	$_SESSION["postcode"] = $postcode;
	$_SESSION["phoneno"] = $phoneno;
	$_SESSION["purchases"] = $product;
	$_SESSION["enquire"] = $enquirytype;
	$_SESSION["prefcont"] = $prefcont;
	$_SESSION["comment"] = $comment;

	

	header("location:fix_order.php");
	exit();
 }

 //Store information into database when there are no errors
 $db_msg = "";
 require_once('settings.php');	//Acquire connection to database
 $conn = @mysqli_connect($host,$user,$pwd,$sql_db);	//connect to database

 if ($conn){
 $sql_table = "orders";	
 $create_table = "CREATE TABLE IF NOT EXISTS orders (
	order_id INT AUTO_INCREMENT PRIMARY KEY,
	order_cost INT NOT NULL,
	order_date DATETIME NOT NULL,
	order_status VARCHAR(10) NOT NULL, /*CHECK (order_status IN ('PENDING','FULFILLED','PAID','ARCHIVED')) DEFAULT 'PENDING',*/
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25) NOT NULL,
	email VARCHAR(50) NOT NULL,
	address VARCHAR(40) NOT NULL,
	suburb VARCHAR(20) NOT NULL,
	state VARCHAR(3) NOT NULL, /*CHECK (state IN ('VIC', 'NSW', 'QLD', 'NT', 'WA', 'SA', 'TAS', 'ACT'))*/
	post_code VARCHAR(4) NOT NULL,
	phoneno VARCHAR(15) NOT NULL,
	prefcont VARCHAR(10) NOT NULL, /*CHECK (prefcont_method IN ('by_email', 'by_phoneno', 'by_post'))*/
	product VARCHAR(100) NOT NULL,
	comment VARCHAR(200),
	card_type VARCHAR(20) NOT NULL,
	card_name VARCHAR(20) NOT NULL,
	card_number VARCHAR(20) NOT NULL,
	card_expiry VARCHAR(20) NOT NULL,
	card_CVV INT NOT NULL
	);";
 $result = mysqli_query($conn, $create_table);	//execute the query and store the result into result pointer
 if ($result){
	//calculating cost
	$total_cost = 0;
	if ($product == "Laptop 1")
	$total_cost += 750;
	if ($product == "Laptop 2")
	$total_cost += 850;
	if ($product == "Laptop 3")
	$total_cost += 950;
	

	//order date
	$datetime = date('Y-m-d H:i:s');

	//insert order query
	$add_order = "INSERT INTO orders 
	(order_cost, order_date, order_status, first_name, last_name, email, address, suburb, state, post_code, phoneno, prefcont, product, comment, 
	card_type, card_name, card_number, card_expiry, card_CVV) 
	VALUES ('$total_cost', '$datetime', 'PENDING', '$fname', '$lname', '$email', '$address', '$suburb', '$state', '$postcode', '$phoneno', '$prefcont', '$product', 
	 '$comment', '$cardType', '$cardName', '$cardNumber', '$cardExpiry', '$cardCVV');";
	$execute = mysqli_query($conn, $add_order);

 if ($execute){
 $db_msg = "<p class='align-center'>Your order is recorded, please check the information below:</p>"
	."<table class='receiptTable'><tr><th>ITEM</th><th>VALUE</th></tr>"
	."<tr><th>Order ID</th><td>" . mysqli_insert_id($conn) . "</td></tr>"
	."<tr><th>Total cost ($)</th><td>$total_cost</td></tr>"
	."<tr><th>Order date</th><td>$datetime</td></tr>"
	."<tr><th>Order status</th><td>PENDING</td></tr>"
	."<tr><th>First name</th><td>$fname</td></tr>"
	."<tr><th>Last name</th><td>$lname</td></tr>"
	."<tr><th>Email</th><td>$email</td></tr>"
	."<tr><th>Address</th><td>$address</td></tr>"
	."<tr><th>Suburb</th><td>$suburb</td></tr>"
	."<tr><th>State</th><td>$state</td></tr>"
	."<tr><th>Post Code</th><td>$postcode</td></tr>"
	."<tr><th>phoneno number</th><td>$phoneno</td></tr>"
	."<tr><th>prefcont method</th><td>$prefcont</td></tr>"
	."<tr><th>Comment</th><td>$comment</td></tr>"
	."<tr><th>Product</th><td>$product</td></tr>"
	."</table>";
	}
	else{
	$db_msg= "<p>Failed to add order.</p>";
	}
 }
 else{
 $db_msg= "<p>Failed to create table.</p>";
 }
 mysqli_close($conn);
 }
 else{
 $db_msg= "<p>Unable to connect to the database.</p>";
 }
 if ($db_msg != "") {
 session_start();
 	$_SESSION["db_msg"] = $db_msg;
	$_SESSION["fname"] = $fname;
	$_SESSION["lname"] = $lname;
	$_SESSION["email"] = $email;
	$_SESSION["address"] = $address;
	$_SESSION["suburb"] = $suburb;
	$_SESSION["state"] = $state;
	$_SESSION["postcode"] = $postcode;
	$_SESSION["phoneno"] = $phoneno;
	$_SESSION["purchases"] = $product;
	$_SESSION["enquire"] = $enquirytype;
	$_SESSION["prefcont"] = $prefcont;
	$_SESSION["comment"] = $comment;
	$_SESSION["total_cost"] = $total_cost;
	$_SESSION["credit_type"] = $cardType;
	$_SESSION["credit_name"] = $cardName;
	$_SESSION["credit_number"] = $cardNumber;
	$_SESSION["expiry"] = $cardExpiry;
	$_SESSION["cvv"] = $cardCVV;
 
 	header("location:receipt.php");
 	exit();
 }
 ?>
</body>
</html>