import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// 导入项目的根组件
import App from './App';
//import reportWebVitals from './reportWebVitals';

// 把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // { </React.StrictMode> }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
