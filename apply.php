<?php
// Database configuration (replace with your actual credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "admission_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $countryCode = htmlspecialchars(trim($_POST['countryCode']));
    $mobile = htmlspecialchars(trim($_POST['mobile']));
    $state = htmlspecialchars(trim($_POST['state']));
    $city = htmlspecialchars(trim($_POST['city']));
    $course = htmlspecialchars(trim($_POST['course']));
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }
    
    // Validate mobile number (simple validation for demo)
    if (!preg_match('/^\d{10}$/', $mobile)) {
        die("Invalid mobile number");
    }
    
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO admissions (name, email, country_code, mobile, state, city, course, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("sssssss", $name, $email, $countryCode, $mobile, $state, $city, $course);
    
    // Execute the statement
    if ($stmt->execute()) {
        // Send confirmation email (in a real application)
        $to = $email;
        $subject = "Admission Registration Confirmation";
        $message = "Dear $name,\n\nThank you for registering for admission at Rajalakshmi Institute of Technology.\n\n";
        $message .= "We have received your application for $course.\n";
        $message .= "Our team will review your application and contact you shortly.\n\n";
        $message .= "Regards,\nAdmission Team\nRajalakshmi Institute of Technology";
        $headers = "From: admissions@rit.edu";
        
        // In a real application, you would uncomment this:
        // mail($to, $subject, $message, $headers);
        
        // Redirect to thank you page
        header("Location: thank_you.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
}

$conn->close();
?>