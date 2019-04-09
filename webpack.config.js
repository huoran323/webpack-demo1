const path = require("path"); //引入一个名字叫path的node的核心模块

module.exports = {
  mode: "development", //模式 development:bundle.js不会被压缩  production: bundle.js会被压缩
  entry: "./src/index.js", //从index.js开始打包
  module: { 
    //模块配置
    rules: [

      //url-loader  使用url-loader打包图片，会将图片转换成一个base64的字符串，然后直接放到bundle.js里面，而不是单独生成一个图片，适用于图片较小的情况
      {
      test: /\.(jpg|png|gif)$/, //jpg格式的文件  (jpg|png|gif)可以打包多种格式的图片文件
        use: {
          loader: "url-loader", //用url-loader来打包jpg格式的文件  需要安装url-loader  npm install url-loader --save-dev
          options: { //配置项
            //placeholder 占位符
            name: '[name].[ext]', //打包文件的名字及后缀与源文件一样 此处以jpg文件格式为例 
            outputPath: 'images/', //将图片格式的文件打包到dist下的images文件夹里
            limit: 2048,  //如果图片的大小超过2048，就像file-loader一样，将打包的图片放到dist下 
          }
        }
      }
      //file-loader  使用file-loader打包图片，会在dist文件下生成对应的图片 
      /* {
        test: /\.(jpg|png|gif)$/, //jpg格式的文件  (jpg|png|gif)可以打包多种格式的图片文件
        use: {
          loader: "file-loader", //用file-loader来打包jpg格式的文件  需要安装file-loader  npm install file-loader --save-dev
          options: { //配置项
            //placeholder 占位符
            name: '[name].[ext]',   //打包文件的名字及后缀与源文件一样 此处以jpg文件格式为例 
            outputPath: 'images/',  //将图片格式的文件打包到dist下的images文件夹里
          }
        }
      } */
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist") //__dirname指的是当前文件所在的路径  生成bundle文件夹的绝对路径
  }
};
