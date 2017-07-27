var path = require('path');
/**
提取css文本的插件
*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //编译的入口文件 ｛文件名：真实路径｝
  entry: {
  'app':'./demo/preventingTransitions.js'
  },
  //编译输出目录和文件名配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist' //对应输出目录的web路径
  },
  devServer: {
   // hot: true,//热编译，自动编译（目前编译无效，需要使用另外命令编译）
    contentBase: path.resolve(__dirname),//server 打开的目录
    publicPath: '/' //限制可访问的目录，地址 可以是数组
  },
  //编译相关配置
  module:{
  	rules: [
	{
		test: /\.(scss|css)$/,//scss文件 css文件走这里
              //文本提取的相关编译配置
					use: ExtractTextPlugin.extract({
						use:[
							{
								loader: 'css-loader',//处理css中的url
								options:{
									importLoaders:1,
								},
							},
							{
								loader:'sass-loader',//处理scss文件
								options:{
									precision : 10 //计算精度
								},
							},
						],
						fallback: 'style-loader',//
					}),
		}
  	,
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,//忽略node_modules目录
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react','stage-0']//支持es6的class写法和react的jsx语法
        }
      }
    }
  ]
  },
   plugins: [
   // 提取后的文本发布配置
   new ExtractTextPlugin({
			filename:  (getPath) => {
				return getPath('css/[name].css?v=[chunkhash]').replace('css/js', 'css');
			}
		})
  ]
};
