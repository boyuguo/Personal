var path = require('path');
/**
提取css文本的插件
*/
module.exports = {
  //编译的入口文件 ｛文件名：真实路径｝
    entry: {
        vendor:['path']
  },
  context: path.resolve(__dirname),
  //编译输出目录和文件名配置
  output: {
   },
  devServer: {
      hot: true,//热编译，自动编译（目前编译无效，需要使用另外命令编译）
      inline:true,
      contentBase: path.resolve(__dirname)+'/',//server 打开的目录
      publicPath: '/' //限制可访问的目录，地址 可以是数组
  }
};
