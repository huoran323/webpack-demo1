/* // import avatar from './avatar.jpg'
import './index.css'  //全局的引用
// import style from './index.css' //适用css模块化打包 webpack.config.js中开启 modules: true

// var img = new Image();
// img.src = avatar;
// img.classList.add('avatar') //适用全局引用
// img.classList.add(style.avatar)

var root = document.getElementById('root');
root.innerHTML = '<div class="iconfont icon-icon_addmessage">fafa</div>'
// root.append(img); */


//--------------HMR示例 CSS-----------------------
/* import './style.css'

var btn = document.createElement('button')
btn.innerHTML = '点击'
document.body.appendChild(btn)

btn.onclick = function() {
    var div = document.createElement('div')
    div.innerHTML = 'item'
    document.body.append(div)
} */

//----------------Babel处理ES6语法-----------------------
// import '@babel/polyfill' //将一些ES6的函数等语法，转换成ES5能识别的语法，例如map  使用插件的话  不需要引入

// const arr = [
//     new Promise(() => {}),
//     new Promise(() => {})
// ]

// arr.map(item => {
//     console.log(item)
// })

//-----------------webpack打包react项目------------------------------------
// import '@babel/polyfill'

// import React, { Component } from 'react'
// import ReactDom from 'react-dom'

// class App extends Component {
//     render() {
//         return <div>hello world</div>
//     }
// }

// ReactDom .render(<App />, document.getElementById('root')) 

//-----------------------------------------------------------------------
import { add } from './math'

 add(1, 2)