<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userObject = $_POST['userObject'];
$userMassage = $_POST['userMassage'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'serhii.only.web@gmail.com';                     // SMTP username
    $mail->Password   = 'Google12345id#';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('serhii.only.web@gmail.com', "Serhii");
    $mail->addAddress('m.serhiiyakymenko@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Check in Site';
    $mail->Body    = "Name user: ${userName}, <br> 
                        His(Her) phone: ${userPhone}. <br> 
                        His(Her) email: ${userEmail} <br> 
                        Object: ${userObject} <br> 
                        Massage: ${userMassage}";

    if ($mail->send()) {
        // # code...
        echo "Submited successful!";
    } else {
        // # code...
        echo "Massage not submited, has error. Code Error: {$mail->ErrorInfo}";
    }
    
    // header('Location: thanks.html');
} catch (Exception $e) {
    echo "Massage not submited, has error. Code Error: {$mail->ErrorInfo}";
};