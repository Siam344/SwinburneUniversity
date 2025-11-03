<?php
header("Content-Type: application/json");

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['name']) || !isset($data['cardNumber']) || !isset($data['expiryDate']) || !isset($data['cvv'])) {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
        exit;
    }

    $name = $data['name'];
    $cardNumber = $data['cardNumber'];
    $expiryDate = $data['expiryDate'];
    $cvv = $data['cvv'];

    $stmt = $conn->prepare("INSERT INTO payments (name, cardNumber, expiryDate, cvv) VALUES (:name, :cardNumber, :expiryDate, :cvv)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':cardNumber', $cardNumber);
    $stmt->bindParam(':expiryDate', $expiryDate);
    $stmt->bindParam(':cvv', $cvv);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Payment details saved successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error saving payment details."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
