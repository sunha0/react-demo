import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Let's do it!
        </p>
        <a
          className="App-link"
          href="https://www.baidu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
      </header>
    </div>
  );
}

export default App;
