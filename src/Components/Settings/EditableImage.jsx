import { createRef, useRef } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

function EditableImage(props){
    var dialogElement = useRef(null);
    var ImageElement = useRef(null);

    function change(e){
      // console.log(JSON.stringify(ImageElement.current));
        const formData  = new FormData();
      
    formData.append("fileToUpload", dialogElement.current.files[0]);
  
    fetch('http://localhost/github/fakebook/PHP/API/UploadFile.php', {
        method: 'POST',
        body: formData,
        mode: "cors",
        redirect: "manual"
    }).then((response) => response.text())
    .then((text) => {
        console.log(text);
        ImageElement.current.src = text;
    } );
    }
    function OpenDialog(e){

        console.log(1); 
        console.log(dialogElement);
 
        dialogElement.current.click();
    }
    function submit(e){
        e.preventDefault()
    }
    return (
        <form onSubmit={submit} action="http://localhost/github/fakebook/PHP/API/UploadFile.php" method="post" onClick={OpenDialog}>
        <input type="file" ref={dialogElement} name="fileToUpload" className="hidden" onChange={change}/>
        <img className="profile-pic" ref={ImageElement} src={props.src} alt="Images/user.png"/>
        </form>
        

    );
}

export default EditableImage;