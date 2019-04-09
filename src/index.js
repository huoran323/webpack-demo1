import avatar from './avatar.jpg'
import './index.css' 

var img = new Image();
img.src = avatar;
img.classList.add('avatar')

var root = document.getElementById('root');
root.append(img);

