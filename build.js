var webpack = require('webpack');
var webpackProdConfig = require('./webpack.prod.conf');
var utils = require('./utils');

var entrys = utils.getMutilEntry('./src/views/**/*.js');
var queue = [];

Object.keys(entrys).forEach(function(key){
	queue.push({
		chunk: key,
		filename: entrys[key]
	})
})
function compile(){
	//  开始 webpack 的编译
	webpack(webpackProdConfig(queue.shift()), function(err, stats) {
	    // 编译成功的回调函数
	    if (err) throw err
	    process.stdout.write(stats.toString({
	        colors: true,
	        modules: false,
	        children: false,
	        chunks: false,
	        chunkModules: false
	    }) + '\n\n');
		if(queue.length){
			compile();
		}
	})
}

compile();