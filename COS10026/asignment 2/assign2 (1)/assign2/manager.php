<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="Manage orders" />
    <meta name="keywords" content="HTML5, PHP, MySQL" />
    <meta name="author" content="Aiden Large"  />
    <title>Order Manager</title>
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet/style.css">
</head>
<body class="manage">
    <?php
	    include_once "header.inc";
	?>
    <h1>Order Manager</h1>
	<?php
		require_once "settings.php";
		$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
		if (!$conn) {
			echo "<p>Database connection failure</p>";
		} else {
			$sql_table = "orders";
			if(isset($_POST["id"])) { 
			    $order_id = trim(htmlspecialchars($_POST["id"]));
			    $first_name = trim(htmlspecialchars($_POST["fname"]));
				$last_name = trim(htmlspecialchars($_POST["lname"]));
				$product_name = trim(htmlspecialchars($_POST["product"]));
			    $order_status = trim(htmlspecialchars($_POST["status"]));
				$sort = trim(htmlspecialchars($_POST["sort"]));
			    $query = "SELECT * FROM $sql_table
			    WHERE order_id LIKE '%$order_id%' 
				    AND first_name LIKE '%$first_name%' 
					AND last_name LIKE '%$last_name%' 
					AND product LIKE '%$product_name%' 
					AND order_status LIKE '%$order_status%'
					ORDER BY $sort";
		    } elseif(isset($_POST["update"])) {
				$query = "SELECT * FROM $sql_table";
				$update_query = trim(htmlspecialchars($_POST["update"]));
				mysqli_query($conn, $update_query);
			} else {
				$query = "SELECT * FROM $sql_table";
			}
			    $result = mysqli_query($conn, $query);
				// checks if the execution was successful
				if(!$result) {
					echo "<p class=\"wrong\">Something is wrong with ", $query, "</p>";
					// would not show in a production script
				} else {
					$record = mysqli_fetch_assoc ($result);
					if ($record) {
						echo '<form method="post" action="manager.php">';
						echo "<table border=\"1\">\n";
				        echo "<tr>\n "
						    ."<th scope=\"col\">Order ID</th>\n "
				            ."<th scope=\"col\">First Name</th>\n "
					        ."<th scope=\"col\">Last Name</th>\n "
					        ."<th scope=\"col\">Product</th>\n "
							."<th scope=\"col\">Order Cost</th>\n "
							."<th scope=\"col\">Order Time</th>\n "
							."<th scope=\"col\">Order Status</th>\n "
							."<th scope=\"col\">Update Status</th>\n "
							."<th scope=\"col\">Delete Order</th>\n "
					        ."</tr>\n ";
							echo "<tr>\n ";
							echo "<td>",$record["order_id"],"</td>\n ";
				            echo "<td>",$record["first_name"],"</td>\n ";
					        echo "<td>",$record["last_name"],"</td>\n ";
					        echo "<td>",$record["product"],"</td>\n ";
							echo "<td>",$record["order_cost"],"</td>\n ";
							echo "<td>",$record["order_date"],"</td>\n ";
							echo "<td>",$record["order_status"],"</td>\n ";
							echo "<td><button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'PENDING' WHERE order_id = ",$record['order_id'],";\">PENDING</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'FULFILLED' WHERE order_id = ",$record['order_id'],";\">FULFILLED</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'PAID' WHERE order_id = ",$record['order_id'],";\">PAID</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'ARCHIVED' WHERE order_id = ",$record['order_id'],";\">ARCHIVED</button></td> ";
							if ($record['order_status'] == 'PENDING') {
							    echo "<td><button name='update' type='submit' value=\"DELETE FROM ",$sql_table," WHERE order_id = ",$record['order_id'],";\">DELETE</button></td> ";
							} else {
								echo "<td></td> ";
							}
							echo "</tr>\n ";
				        while ($row = mysqli_fetch_assoc($result)){
					        echo "<tr>\n ";
							echo "<td>",$row["order_id"],"</td>\n ";
				            echo "<td>",$row["first_name"],"</td>\n ";
					        echo "<td>",$row["last_name"],"</td>\n ";
					        echo "<td>",$row["product"],"</td>\n ";
							echo "<td>",$row["order_cost"],"</td>\n ";
							echo "<td>",$row["order_date"],"</td>\n ";
							echo "<td>",$row["order_status"],"</td>\n ";
							echo "<td><button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'PENDING' WHERE order_id = ",$row['order_id'],";\">PENDING</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'FULFILLED' WHERE order_id = ",$row['order_id'],";\">FULFILLED</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'PAID' WHERE order_id = ",$row['order_id'],";\">PAID</button>
								<button name='update' type='submit' value=\"UPDATE ",$sql_table," SET order_status = 'ARCHIVED' WHERE order_id = ",$row['order_id'],";\">ARCHIVED</button></td> ";
							if ($row['order_status'] == 'PENDING') {
							    echo "<td><button name='update' type='submit' value=\"DELETE FROM ",$sql_table," WHERE order_id = ",$row['order_id'],";\">DELETE</button></td> ";
							} else {
								echo "<td></td> ";
							}
					        echo "</tr>\n ";
						}
						echo "</table>\n ";
						echo "</form> ";
			            mysqli_free_result($result);
					} else {
						echo "<p>No results found</p>";
					}
				} // if successful query operation 
		//close the database connection
		mysqli_close($conn);
		}
			
	?>
	<form method="post" action="manager.php">
	    <fieldset>
	        <legend>Search Order</legend>
		    <p>
		        <label for="order_id">Order ID:</label>
                <input type="text" name="id" id="order_id" />
		    </p>
		    <p>
		        <label for="first_name">First Name:</label>
                <input type="text" name="fname" id="first_name" />
		    </p>
			<p>
		        <label for="last_name">Last Name:</label>
                <input type="text" name="lname" id="last_name" />
		    </p>
			<p>
	            <label for="product">Product:</label>
	            <select name="product" id="product" >
                    <option value="">Select Product</option>
	                <option value="Laptop 1">Laptop 1</option>
	                <option value="Laptop 2">Laptop 2</option>
                    <option value="Laptop 3">Laptop 3</option>
	            </select>
            </p>
		    <p>
		        <label for="order_status">Order Status:</label>
                <select name="status" id="order_status" />
				    <option value="">Select Status</option>
					<option value="PENDING">PENDING</option>
					<option value="FULFILLED">FULFILLED</option>
					<option value="PAID">PAID</option>
					<option value="ARCHIVED">ARCHIVED</option>
				</select>
		    </p>
			<p>
                <label>Sort by:</label>
	            <br />
	            <label><input type="radio" name="sort" value="order_id" checked />Order ID</label>
	            <label><input type="radio" name="sort" value="order_cost" />Order Cost</label>
            </p>
		    <input type="submit" value="Search"/>
	    </fieldset>
	</form>
	<?php
	    include_once "footer.inc";
	?>
</body>