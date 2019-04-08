const path = require("path"); //引入一个名字叫path的node的核心模块

module.exports = {
  mode: "development", //模式 development:bundle.js不会被压缩  production: bundle.js会被压缩
  entry: "./src/index.js", //从index.js开始打包
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist") //__dirname指的是当前文件所在的路径  生成bundle文件夹的绝对路径
  }
};
