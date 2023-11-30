<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$server = "localhost";
$user = "root";
$pass = "";
$db = "FakeBook";
/*
$con = new mysqli($server, $user, $pass, $db);

if ($con->connect_error) {
    die("". $con->connect_error);
}
*/
$Relative_Path = '../../public/';
$Img_Path = "images/";
$Public_Path = 'C:\xampp\htdocs\github\fakebook\public';