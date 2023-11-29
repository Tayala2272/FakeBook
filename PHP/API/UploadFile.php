<?php

include_once("init.php");



if(isset($_FILES["fileToUpload"])){
    $name = $_FILES["fileToUpload"]["name"];

    if(file_exists("images/".$name) == false){
        echo "images/".$name;
        SaveFile($Public_Path."/images/".$name, $_FILES["fileToUpload"]["tmp_name"]);
    }
    else{
        
        echo "images/".$name;
    
    }
   
    
}


function SaveFile($path, $file) {
    move_uploaded_file($file, $path);
 }