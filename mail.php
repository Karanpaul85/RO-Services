<?php
$to="harpreets0728@gmail.com, karanpaul85@gmail.com";
$subject = 'Enquiry From servicerepair.in';
$name= $_POST['name'];
$email = $_POST['email'];
$contactno = $_POST['phone'];
$servicesType = $_POST['servicesType'];
$comments = $_POST['message'];
$m1 = "<h2>Inquiry </h2><br><hr>"."<br>";
$m2 = "<b>Name :</b>".$name."<br>";
$m3 = "<b>Email :</b>".$email."<br>";
$m4 = "<b>Phone No :</b>".$contactno ."<br>";
$m5 = "<b>Service Type :</b>".$servicesType ."<br>";
$m6 = "<b>Messgae:</b>".$comments."<br>";
$message = $m1.$m2.$m3.$m4.$m5.$m6;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: ".$email . "\r\n";

mail($to,$subject,$message,$headers);
header('location: thankyou.html');
?>