const path = require("path"); //引入一个名字叫path的node的核心模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// plugin 可以再webpack运行到某个时刻的时候， 帮你做一些事情

module.exports = {
  mode: "development", //模式 development:bundle.js不会被压缩  production: bundle.js会被压缩
  // entry: "./src/index.js", //从index.js开始打包
 
  devtool: 'cheap-module-eval-source-map',  //sourceMap是一个映射关系，他可以知道打包文件中的js对应src下面的哪个js,可以映射到代码所在的src文件的位置,可以映射到源代码哪行出错了
  /* devtool:
    若环境是开发环境mode: "development"  devtool: 'cheap-module-eval-source-map'
    若环境是生产环境mode: "production" devtool: 'cheap-module-source-map' */ 
  
  entry: {
    main: "./src/index.js",
    // sub: "./src/index.js" //打包两个文件
  },

  devServer: {  //自动打包并重新刷新浏览器
    contentBase: './dist',  //打包的文件目录
    open: true,  //自动帮你打开浏览器，并访问地址 
  },

  module: {
    //模块配置
    rules: [
      //url-loader  使用url-loader打包图片，会将图片转换成一个base64的字符串，然后直接放到bundle.js里面，而不是单独生成一个图片，适用于图片较小的情况
      {
        test: /\.(jpg|png|gif)$/, //jpg格式的文件  (jpg|png|gif)可以打包多种格式的图片文件
        use: {
          loader: "url-loader", //用url-loader来打包jpg格式的文件  需要安装url-loader  npm install url-loader --save-dev
          options: {
            //配置项
            //placeholder 占位符
            name: "[name].[ext]", //打包文件的名字及后缀与源文件一样 此处以jpg文件格式为例
            outputPath: "images/", //将图片格式的文件打包到dist下的images文件夹里
            limit: 2048 //如果图片的大小超过2048，就像file-loader一样，将打包的图片放到dist下 
          }
        }
      },
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
      {
        test: /\.css$/, //打包css文件
        use: [
          "style-loader", //loader的执行顺序：从下到上，从右到左
          // 'css-loader',
          {
            //给css-loader添加配置项
            loader: "css-loader",
            options: {
              // importLoaders: 1, //对于在css/scss/less文件中引用css/scss/less文件，importLoaders: 2 规定内部的css/scss/less文件也要重新走一遍下面两个loader
              // modules: false, //开启css的模块化打包，
            }
          }
          // 'sass-loader',  //打包sass文件
          // 'postcss-loader'  //厂商前缀
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff)$/, //打包字体
        use: [
          "file-loader" //
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      //html-webpack-plugin插件会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
      template: "src/index.html" //模板文件，
    }),
    new CleanWebpackPlugin() // 清除插件
  ],

  output: {
    // publicPath: "http://cdn.com.cn", //打包上线的外网地址
    filename: "[name].js", //对应入口的两个打包的文件名main sub
    // filename: "bundle.js",
    path: path.resolve(__dirname, "dist") //__dirname指的是当前文件所在的路径  生成bundle文件夹的绝对路径
  }
};
