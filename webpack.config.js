const path = require("path"); //引入一个名字叫path的node的核心模块

module.exports = {
  mode: "development", //模式 development:bundle.js不会被压缩  production: bundle.js会被压缩
  entry: "./src/index.js", //从index.js开始打包
  module: {
    //模块配置
    rules: [
      {
        test: /\.jpg$/, //jpg格式的文件
        use: {
          loader: "file-loader" //用file-loader来打包jpg格式的文件  需要安装file-loader  npm install file-loader --save-dev
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist") //__dirname指的是当前文件所在的路径  生成bundle文件夹的绝对路径
  }
};
