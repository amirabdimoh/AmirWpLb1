<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comment = $_POST['comment'];

    // Validate input (you can add more validation as per your requirements)

    // Connect to your database
    $servername = "localhost"; // Change this to your database server name
    $username = "your_username"; // Change this to your database username
    $password = "your_password"; // Change this to your database password
    $dbname = "your_database"; // Change this to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert data into the database
    $sql = "INSERT INTO messages (name, email, subject, comment) VALUES (?, ?, ?, ?)";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $subject, $comment);

    // Execute the statement
    if ($stmt->execute() === TRUE) {
        echo "Message sent successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: index.php");
    exit();
}
?>
