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

//---------------------------------------