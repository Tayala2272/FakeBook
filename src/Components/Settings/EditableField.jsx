import { createRef, useRef } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

function EditableField(props){
    var dialogElement = useRef(null);
    var ChangeButtonElement = useRef(null);

    var VAL = props.value;
    function change(e){
        if(VAL != dialogElement.current.value){
            ChangeButtonElement.current.style.display = "inline";
        }
        else{
            ChangeButtonElement.current.style.display = "none";
        }
        console.log(VAL + " " + dialogElement.current.value + " " + VAL == dialogElement.current.value);
        /*
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
    */
    }
    function OpenDialog(e){

    }
    function submit(e){
        e.preventDefault()
    }
    return (
        <form onSubmit={submit} action="http://localhost/github/fakebook/PHP/API/UploadFile.php" method="post" onClick={OpenDialog} className="Field">
        <a className="Field-Header Field-Spacing">{props.name}</a>
        <input  type={props.type} ref={dialogElement} name="fileToUpload" className="Field-Input Field-Spacing" onChange={change}/>
        <input ref={ChangeButtonElement} type="submit" className="hidden Field-Button Field-Spacing" value="Zmień"></input>
        </form>
    );
}

export default EditableField;