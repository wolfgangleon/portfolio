<?php
    if ($_POST["submit"]) {
        $name = $_POST['cf_name'];
        $email = $_POST['cf_email'];
        $message = $_POST['cf_message'];
        $from = 'portfolio Contact Form'; 
        $to = 'wleonproduction@gmail.com'; 
        $subject = 'Message from portfolio form ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
      
 
		// If there are no errors, send the email
		
		    mail ($to, $subject, $body, $from);
		    echo 'Thank You! I will be in touch';
		   
	
    }
?>