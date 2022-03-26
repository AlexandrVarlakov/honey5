<?php
    
	
    $uPhone = $_POST['phone'];
    	
	$to = 'mail@mail.ru';
    
    $subject = 'Заявка с просьбой перезвонить сайта: Honey5';
    $message = 'Телефон: ' . $uPhone . ";";
               

    
    $headers = 'From: Hohey5' . "\r\n" .
    'Reply-To: Honey5' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
    