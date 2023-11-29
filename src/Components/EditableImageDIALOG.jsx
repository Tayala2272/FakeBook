function EditableImageDIALOG(props){

    function change(e){
        console.log("Click");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }
    return (
        <div className="border" onClick={change}>
        <img className="profile-pic" src={props.src} alt="Images/user.png" />
        </div>
        

    );
}

export default EditableImageDIALOG;