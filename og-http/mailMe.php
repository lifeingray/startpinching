<?php

$challenge = $_POST["challenge"];



$sendTo = "founders@startpinching.com";
$subject = "Contact from Pinch Webform";
$headers = "From: " . $_POST["name"];
$headers .= "<" . $_POST["email"] . ">\r\n";
$headers .= "Reply-To: " . $_POST["email"] . "\r\n";
$headers .= "Return-Path: " . $_POST["email"];
$message = "Message from: " . $_POST["name"] . "\r\n";
$message .="Phone Number: " . $_POST["phone"]. "\r\n";
$message .="Email: " . $_POST["email"] . "\r\n";
$message .="\r\n";
$message .="\r\n";
$message2 ="Message: " . $_POST["message"] . "\r\n";
$body = $message . "\r\n" . $message2;

if ($challenge == "lig") {
	mail($sendTo, $subject, $body, $headers);
} else {
	// do nothing 
};

?>

<meta http-equiv="refresh" content="0;url=http://www.startpinching.com">