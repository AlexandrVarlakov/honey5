<?php
    
	
    $uName = $_POST['name'];
    $uPhone = $_POST['phone'];
    $msg = $_POST['message'];
    	
	$to = 'mail@mail.ru';
    
    $subject = 'Сообщение с сайта: Honey5';
    $message = 'Имя: ' . $uName . ";" . "\r\n" . 'Телефон: ' . $uPhone . ";" . "\r\n" . 'Сообщение: ' . $msg . ";";
               

    
    $headers = 'From: Honey5' . "\r\n" .
    'Reply-To: Honey5' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
    