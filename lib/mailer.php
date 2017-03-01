<?php

class Mailer {

	private $toEmail;	
	
	function __construct() {
		 $this->toEmail = MYEMAIL;
	} 
	
	public function sendMail($fromName,$fromEmail, $subject, $message) {
		$fromname = $fromName;
		$fromaddress = $fromEmail;
		$headers  = "MIME-Version: 1.0\n";
		$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
		$headers .= "X-Priority: 3\n";
		$headers .= "X-MSMail-Priority: Normal\n";
		$headers .= "X-Mailer: php\n";
		$headers .= "From: \"".$fromname."\" <".$fromaddress.">\n";
		$headers .= "Return-Path: <" . $fromaddress . ">\n";
	
	    $message = nl2br($message);
		$message = $this->cut_word($message, 180);
		$message = stripslashes($message);
		$message = trim($message);
		
	  	return mail($this->toEmail, $subject, $message, $headers);
	}
	
	public function setRecipient($name, $email) {
		$this->toName = $name;
		$this->toEmail = $email;
	}
	
	public function cut_word($txt, $where) {
	   if (empty($txt)) return false;
	   for ($c = 0, $a = 0, $g = 0; $c<strlen($txt); $c++) {
	       $d[$c+$g]=$txt[$c];
	       if ($txt[$c]!=" ") $a++;
	       else if ($txt[$c]==" ") $a = 0;
	       if ($a==$where) {
	       $g++;
	       $d[$c+$g]="<br />";
	       $a = 0;
	       }
	   }
	   return implode("", $d);
	}

}
?>