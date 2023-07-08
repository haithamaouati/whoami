<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "haithamaouati@gmail.com";
    $subject = "New message from " . $name;
    $body = "From: " . $name . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= $message;

    if (mail($to, $subject, $body)) {
      echo "Email sent successfully!";
    } else {
      echo "Failed to send email.";
    }
  }
?>
