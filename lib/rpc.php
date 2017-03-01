<?php
session_start(); /* starts session to save generated random number */
require('./settings.php');
require('./mailer.php');

if ( isset($_GET['mode']) && $_GET['mode'] == "postMessage") {
	//echo $_SESSION['captcha'] . ":" . $_POST['captcha'];
	if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['captcha']) && (int) $_POST['captcha'] == (int) $_SESSION['captcha']) {
		if ( (isset($_POST['name']) && trim($_POST['name']) !== "") && (isset($_POST['email']) && trim($_POST['email']) !== "") && (isset($_POST['message']) && trim($_POST['message']) !== "") ) {
			$email = trim($_POST['email']);
			$name = trim($_POST['name']);
			$message = trim($_POST['message']);
			
			$mailer = new Mailer();
			$sent = $mailer->sendMail($name, $email, 'Brev från cv.kanzie.com', $message);
			
			echo ( $sent ) ? "ok" : "nok";
		} else {
			echo "missing";
		}
	} elseif(isset($_POST['captcha']) && $_POST['captcha'] !== $_SESSION['captcha']) {
		echo "captcha";
	} else {
		echo "all bad";
	}	
	unset($_SESSION['captcha']);
	die(); 	
} elseif (isset($_GET['mode']) && $_GET['mode'] == "getRand") {	
	echo $_SESSION['captcha'];
} else {	
	$_SESSION['captcha'] = rand(0,4);
	echo $_SESSION['captcha'];
}
?>