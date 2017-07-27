var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');
var path = require('path');
var isProduction = process.argv.indexOf('-p')!== -1;
if(isProduction){
  isProduction = process.argv.indexOf('slice') === -1;
}

var configPath = path.dirname(__filename); //当前webpack.config.js路径
var distPath = configPath + '/../../'; //编译文件路径
var sharedPath = configPath + '/../../shared/'; //跨站公用的文件目录
var fontPath = configPath + '/../font/'; //当前使用的字体文件
var appPath = configPath + '/../';
console.log("webpack:start PC front end deploy----------------------Powered By LXG");
//自动匹配字体库
fs.readFile(configPath + '/font/css/font-codes.css','utf-8',function(err,fontStr){
	if(err) return false;
	var targetFile = configPath + '/css/sass-package/_variables.scss';
	var font_variables = fontStr.replace(/(\.)(f-icon-.*):before.*:(.*)}/g,function(find,$1,$2,$3){

		return '$' + $2 + ': ' + $3;
	})
	fs.readFile(targetFile,'utf-8',function(err,baseStr){
		if(err) return false;
		var txt = baseStr.replace(/([\s\S]*\/\*start icon\*\/)([\s\S]*)(\/\*end icon\*\/[\s\S]*)/g,function(find,$1,$2,$3){
			return $1 + '\n' + font_variables + '\n' + $3;
		});
		fs.writeFile(targetFile,txt)
	})
});
var setting  = {
	entry: {
		'base' : configPath + '/js/base'
		,'home' : configPath + '/js/home'
		,'login' : configPath + '/js/login'
		,'category' : configPath + '/js/category'
		,'presale' : configPath + '/js/presale'
		,'search' : configPath + '/js/search'
		,'detail' : configPath + '/js/product-detail'
		,'user-center' : configPath + '/js/user-center'
		,'designer' : configPath + '/js/designer'
		,'shortmessage' : configPath + '/js/shortmessage'
		,'vip-buy' : configPath + '/js/vip-buy'
		,'activity' : configPath + '/js/activity'
		,'not_found' : configPath + '/js/not-found'
		,'cart_page' : configPath + '/js/cart-page'
		,'checkout_page' : configPath + '/js/checkout-page'
		,'pay_success' : configPath + '/js/pay_success'
		,'look_book' : configPath + '/js/look_book'
		,'information' : configPath + '/js/information'

	},
	cache: true,
	//[chunkhash]
	// bundle
	output: {
		filename: './js/[name].bundle.js?v=[chunkhash]',
		chunkFilename: "./js/[chunkhash].js",
		path : distPath + 'dist/',
		//publicPath : '../'
        publicPath : '/static/dist/'
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		//"jquery": "jQuery"
	}
	,module : {
		loaders : [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
			,{test: /\.(jpe?g|png|gif)$/i, loaders: [
				'url-loader?limit=8192&name=[path][name].[ext]?[hash]'
				,'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
			]}
			,{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass?config=sassConfig")}
			,{test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader : 'url-loader?limit=50000&name=[path][name].[ext]?[hash]'}
			,{test: /\.jsx?$/, exclude: /(node_modules|bower_components)/
				,loader : 'babel-loader'
				,query : {
					presets : ['react','es2015']
					,plugins : ['transform-runtime']
				}
			}
			,{test : /\.json$/,loader: 'json'}
		]
	},
	sassConfig : {
		precision : 10
	}
	,resolve : {
		alias : {
			/*'swiper-css' : configPath + '/js/lib/swiper/swiper.min.css'
			,'swiper' : configPath + '/js/lib/swiper/swiper.min.js'
			,'floatlabel' : configPath + '/js/lib/floatlabels/floatlabels.js'
			,'_js' : configPath + '/platform/js'*/
			"_shared" : sharedPath
			,"_font" : fontPath
			,"_app" : appPath
			,"_appRoot" : configPath + '/../../../apps/Catalog/'
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name : 'commons'
			,filename : 'vendor.js?v=[chunkhash]'
			,minChunks : 2
		}),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin("./css/[name].css?v=[chunkhash]",{
			allChunks: true
		})
		,new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
			,React : 'react'
			,ReactDOM : 'react-dom'
		})
		,new webpack.optimize.OccurenceOrderPlugin()
		,new AssetsPlugin({filename: 'assets.json',fullPath: false,prettyPrint: true,update : true})
	]
};
if(isProduction){
	setting.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			//sourceMap: true,
			compress: {
				drop_console: true
			},
			mangle: {
				except: ['$super', '$', 'exports', 'require']
			}
		})
	)
}

module.exports = setting;
