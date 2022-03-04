<?php
    $destinatario = 'yaniveth13@gmail.com'; // Modificar correo

    $mail = $_POST['mail'];
    $header = "El email es: " . $mail;
    $mensaje = "Enviado desde BaseRex";

    mail($destinatario, $mensaje, $header);
    echo "<script>alert('¡Gracias por suscribirte!')</script>";
    echo "<script>setTimeout(\"location.href = '../suscripcion.html'\",1000)</script>";
?>