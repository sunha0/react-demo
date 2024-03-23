import logo from './logo.svg';
import './App.css';


// 项目的根组件
// App -> index.js -> public/index.html(root)

function getName() {
  return '我是函数调用'
}


// 条件渲染

const page= 1
function get_article_page(){

  if (page === 1){
    return <div>page 1</div>
  }
  else if (page ===2){
    <div>page 2</div>
  }
  else {
    <div>page 3</div>
  }

}




function App() {
  let count = '我是变量'


  const list=[
    {id:1001,name:'vue'},
    {id:1002,name:'react'},
    {id:1003,name:'Angular'},
  ]

 let loading = false 

  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />

          {/* 使用引号识别字符串  */}
        <p>{'我是字符串'}</p>

         {/* 使用变量  */}

        <p>{count}</p> 

        {/* 使用函数调用 */}
        {getName()}

         {/* 方法调用 */}
         {new Date().getTime()}

        <ul>

        {/* 渲染列表 */}
        { list.map(item=> <li key={item.id}>{item.name}</li> )   }
        </ul>
      
        {/* 三元运算 */}
        {loading ? <sapn> loading </sapn> : <span>not loading</span>}

        {/* 条件渲染 */}
        {get_article_page()}
        
   



    </div>
  );
}

export default App;
