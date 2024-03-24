import './App.css';
import { useState } from 'react';

// userState 实现一个计数器按钮 

function App() {

// 1、调用useState 添加一个状态变量
// 2、count 状态变量
// 3、setCount 修改状态变量的方法
 const [count,setCount] = useState(0)


// 点击事件回调
const handleClick = () =>{

  // 作用: 1、用传入的新值修改count
  // 2、 重新使用新的count 渲染UI 

  setCount(count + 1)

}


// 修改对象状态

const [form,setForm] = useState({name:"jack"})


const handleForm = () => {

    setForm(
      {
      ...form,
      name:"lucy"
      }
      
      )
}


  return (  
    <div className="App">

        <button onClick={handleClick}>{count}</button>

        <button onClick={handleForm} >选择</button>

        <input  placeholder={form.name}></input>


    </div>
  );
}

export default App;
