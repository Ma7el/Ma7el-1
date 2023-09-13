


<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $item = $_POST['item'];
  $size = $_POST['size'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Compose the email message
  $to = 'ma7elorder@gmail.com';
  $subject = 'New Order from Ma7el Website';
  $email_message = "Item: $item\n";
  $email_message .= "Size: $size\n";
  $email_message .= "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Message: $message\n";

  // Set the email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  $success = mail($to, $subject, $email_message, $headers);

  if ($success) {
    echo 'Email sent successfully!';
  } else {
    echo 'Failed to send email. Please try again.';
  }
}
?>