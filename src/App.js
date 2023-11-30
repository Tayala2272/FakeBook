import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import PostCard from "./Components/PostsCards/PostCard";
import PostCardManyPhoto from "./Components/PostsCards/PostCardManyPhoto";
import Background from './Components/Settings/Background';
import EditableImage from './Components/Settings/EditableImage';
import EditableField from './Components/Settings/EditableField';
import React from 'react';
import "./bootstrap/dist/css/bootstrap.css";
import StronaGlowna from "./Components/MainPage/StronaGlowna";

//Ekran logowania
  function Logowanie() {
    return (
      <LoginSignUp/>
    );
  }

//Settings
function Ustawienia(){
  return (
    <>
    
    <Background shit="sss">
    <EditableImage src="Images/user.png"></EditableImage>
    <EditableField type="Text" name="Imie" value="ASD"></EditableField>
    <EditableField type="Text" name="Nazwisko" value="ASD"></EditableField>

    <EditableField type="Date" name="Data Urodzenia" value="ASD"></EditableField>

    <EditableField type="email" name="Email" value="Email"></EditableField>
    <EditableField type="Text" name="Nazwisko" value="ASD"></EditableField>
    </Background>
    </> 
  );
}

//MainPage
  function MainPage() {
    return (
      <StronaGlowna />
    );
  }


//posty
  const slides = [
    "https://www.hogansirishcottages.com/blog/wp-content/uploads/sites/8/2022/03/Feature-Image-Highest-mountains-in-Ireland.jpg",
    "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
    "https://live-production.wcms.abc-cdn.net.au/9db63e8542f80b1c0846cf256252a8b6?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485",
  ];
  function Posty() {
    return (
      <>
        <PostCard />
        <PostCardManyPhoto>
          {slides.map((s) => (
            <img src={s} alt="" />
          ))}
        </PostCardManyPhoto>
      </>
    );
  }


//Przykładowe użycie wszystkich 4 elementów:
function App() {
  return (
    <>
      <Logowanie></Logowanie>
    </>
  );
}

export default App;
