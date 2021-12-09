
import './App.css';
import ZoneButton from './components/ZoneButton';
import background from "./background.jpeg";

function App() {
  return (

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',backgroundImage: `url(${background})` }}>
    <ZoneButton/>

    </div>
  );
}

export default App;
