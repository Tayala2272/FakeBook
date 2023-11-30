import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Background from './Components/Settings/Background';
import EditableImage from './Components/Settings/EditableImage';
import EditableField from './Components/Settings/EditableField';
import React from 'react';
import "./bootstrap/dist/css/bootstrap.css";
import StronaGlowna from "./Components/MainPage/StronaGlowna";
import Profil from "./Components/MainPage/ProfilUzytkownika";
import { Route, Routes } from 'react-router-dom';

//Settings
function Ustawienia(){
  return (
    <div className="App">
      <header className="App-header">
    
    <Background shit="sss">
    <EditableImage src="Images/user.png"></EditableImage>
    <EditableField type="Text" name="Imie" value="ASD"></EditableField>
    <EditableField type="Text" name="Nazwisko" value="ASD"></EditableField>

    <EditableField type="Date" name="Data Urodzenia" value="ASD"></EditableField>

    <EditableField type="email" name="Email" value="Email"></EditableField>
    <EditableField type="Text" name="Nazwisko" value="ASD"></EditableField>
    </Background>
    </header> 
    </div> 
  );
}


//Przykładowe użycie wszystkich 4 elementów:
function App() {
  return (
    <Routes>
      <Route path="/" element={<StronaGlowna />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/Logowanie" element={<LoginSignUp />} />
      <Route path="/Ustawienia" element={<Ustawienia />} />
    </Routes>
  );
}

export default App;
