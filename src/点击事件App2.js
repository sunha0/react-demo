import logo from './logo.svg';
import './App.css';



function App() {
  
  // 事件对象e
  const handleClick = (e) =>{

    alert("点击弹出事件")
    console.log("button 点击了",e)
  }

  // 传参自定义参数
  const handleClickParams = (name) =>{

    alert(name)
    console.log("button 点击了",name)
  }

  // 自定义参数 + 事件对象e
  const handleClickParamsAndE = (name,e ) =>{

    alert(name)
    console.log("button 点击了",name,e)
  }

  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />

      <p>
      <button onClick={handleClick}>点击我</button>
      </p>

        
    {/* 传递参数 */}

      <p>
      <button onClick={()=>handleClickParams('jack') }>点击我 传递自定义参数</button>
      </p>
    


    {/* 传递参数及事件对象e */}
    <p> 
    <button onClick={(e)=>handleClickParamsAndE('jack',e) }>点击我 传递自定义参数 返回对象事件</button>
    </p>


    </div>
  );
}

export default App;
