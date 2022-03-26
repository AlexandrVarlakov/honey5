<?php
    
	
    $uName = $_POST['name'];
    $uPhone = $_POST['phone'];
    $productId = $_POST['productId'];
    	
	$to = 'mail@mail.ru';
    
    $subject = 'Заявка на покупку сайта: Honey5';
    $message = 'Имя: ' . $uName . ";" . "\r\n" . 'Телефон: ' . $uPhone . ";" . "\r\n" . 'id Продукта: ' . $productId . ";";
               

    
    $headers = 'From: Honey' . "\r\n" .
    'Reply-To: Honey' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
    