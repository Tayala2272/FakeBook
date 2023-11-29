import './App.css';
import Background from './Components/Background';
import EditableImage from './Components/EditableImage';
import EditableField from './Components/EditableField';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Thing(){
  return (
    <>
    <Background shit="sss">
    <EditableImage src="Images/user.png"></EditableImage>
    <EditableField type="Text" name="Imie" value="ASD"></EditableField>
    <EditableField type="Text" name="Nazwisko" value="ASD"></EditableField>

    <EditableField type="Date" name="Data Urodzenia" value="ASD"></EditableField>

    
    </Background>
    </> 
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <Thing></Thing>
        
      </header>
    </div>
  );
}

export default App;
