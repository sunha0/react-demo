import logo from './logo.svg';
import './App.css';


const Button = () => {
  return <button>click me</button>
}

function App() {
  
 

  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />

        <Button></Button>

    </div>
  );
}

export default App;
