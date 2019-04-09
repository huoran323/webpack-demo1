import avatar from './avatar.jpg'
// import './index.css'  //全局的引用
import style from './index.css' //适用css模块化打包 webpack.config.js中开启 modules: true

var img = new Image();
img.src = avatar;
// img.classList.add('avatar') //适用全局引用
img.classList.add(style.avatar)

var root = document.getElementById('root');
root.append(img);

