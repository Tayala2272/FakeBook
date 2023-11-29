function EditableImage(props){

    function change(e){
        console.log("Click");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('localhost:3000/api/posts', requestOptions)
            .then(response => response.json())
           
    }
    return (
        <div className="border" onClick={change}>
        <img className="profile-pic" src={props.src} alt="Images/user.png" />
        </div>
        

    );
}

export default EditableImage;