const path = require("path"); //引入一个名字叫path的node的核心模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

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

  devServer: {  //自动打包并重新刷新浏览器  webpack-dev-server打包不会生成dist文件，存储电脑的内存中了
    contentBase: './dist',  //打包的文件目录
    open: true,  //自动帮你打开浏览器，并访问地址 
    port: 8080, //端口号
    hot: true, //开启热更新  
    // hotOnly: true, //开启：热模块更新失效的时候不需要浏览器做其他重新启动的工作
  },

  module: {
    //模块配置
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/, //如果你的js文件是放在node_modules中的，就不使用babel-loader
        loader: "babel-loader",  //es6转es5 
        options: {

          /********************下面两个二选一,放在.babelrc文件下****************/
          //如果使用的只是业务代码的话  用下面这个
          /* presets: [["@babel/preset-env", {
             targets: { 
              chrome: "67", //打包的项目会运行在大于67版本的chrome浏览器下 
            },
            useBuiltIns: "usage",  //当做babel/polify填充时，往低版本浏览器加一些不存在的特性时，根据业务代码选择加入（如用到map了，就去添加，没用到就不添加）
          }]], */ //通过这个 使ES6转换成ES5

          //使用类库的时候，使用下面这个插件 需要安装@babel/plugin-transform-runtime， @babel/runtime， @babel/runtime-corejs2
          /* "plugins": [["@babel/plugin-transform-runtime", {
            "corejs": 2,
            "heplers": true,
            "regenerator": true,
            "useESModules": false
          }]], */
          /***************************************** */
        }
      },
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
    new CleanWebpackPlugin(), // 清除插件
    new webpack.HotModuleReplacementPlugin(),  //开启webpack的html功能，配合devServer的hot和hotOnly开启
  ],

  //tree-shaking引入模块时，不引入模块的所有代码，只引入模块所需要的代码
  optimization: { //在开发环境中使用tree-shaking需要引入这个，tree-shaking只适用静态引入(import('xxx')), 不适用commonjs动态引入(const xxx = require('xxx)),还需要在package.json中添加"sideEffects": false,意思就是tree-shaking对所有的模块都使用;  "sideEffects": ["*.css"],意思是指遇到css文件不需要使用tree-shaking
    usedExports: true, //
  },

  output: {
    // publicPath: "http://cdn.com.cn", //打包上线的外网地址
    filename: "[name].js", //对应入口的两个打包的文件名main sub
    // filename: "bundle.js",
    path: path.resolve(__dirname, "dist") //__dirname指的是当前文件所在的路径  生成bundle文件夹的绝对路径
  }
};
