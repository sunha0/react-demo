import logo from './logo.svg';
import './App.css';


// 项目的根组件
// App -> index.js -> public/index.html(root)
function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        This is React
    </div>
  );
}

export default App;
