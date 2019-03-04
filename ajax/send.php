<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../extensiones/vendor/autoload.php';

//echo 'entro a send';
if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['user'])){
   // echo 'entro al if';
    $user = $_POST['user'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //echo "Nombre: ".$user.", Email: ".$email.", Message: ".$message;        

    date_default_timezone_set("America/Monterrey");

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.mx';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'corp@mind-innovation.xyz';
    $mail->Password = 'g[?0qBclYXbGz/9;';

    $mail -> setFrom('corp@mind-innovation.xyz', 'MIND INNOVATION');

    $mail -> addAddress('mind.corp.innovation@gmail.com','Mind Innovation');
    $mail -> addAddress('corp@mind-innovation.xyz','Mind Innovation');

    if ($mail->addReplyTo($_POST['email'], $_POST['user'])) {
        $mail->Subject = 'PHPMailer contact form Mind Innovation';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['user']}
Message: {$_POST['message']}
EOT;
        if (!$mail->send()) {
            echo '1';
        } else {
           echo '2';
        }
    } else {
        echo '3';
    }
    
}else{
    echo 'entro al else';
}