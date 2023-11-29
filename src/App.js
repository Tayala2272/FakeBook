import './App.css';
import Background from './Components/Background';
import EditableImage from './Components/EditableImage';

function Thing(){
  return (
    <>
    <Background shit="sss">
    <EditableImage src="Images/user.png"></EditableImage>
    </Background>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <Thing><h1>agdgdgad</h1></Thing>
        
      </header>
    </div>
  );
}

export default App;
