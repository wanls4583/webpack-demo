var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.conf');
var utils = require('./utils');

function resolve(path){
    return __dirname + '/' + path;
}

var entrys = utils.getMutilEntry('./src/views/**/*.js');

webpackBaseConfig = merge(webpackBaseConfig,{
    devtool: '#cheap-module-eval-source-map',
    entry: entrys,
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        //HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件
        //需要配合webpack-hot-middleware一起使用
        new webpack.HotModuleReplacementPlugin(),
        //在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误
        new webpack.NoEmitOnErrorsPlugin(),
        //用于更友好地输出webpack的警告、错误等信息
        new FriendlyErrorsPlugin(),
        // HMR shows correct file names in console on update.
        new webpack.NamedModulesPlugin()
    ]
})

//有几个入口就添加几个html插件
Object.keys(entrys).forEach(function(key){
	var entry = entrys[key];
	var basename = path.basename(entry,path.extname(entry));
	var template = entry.substring(0,entry.lastIndexOf('/')+1)+basename;
	webpackBaseConfig.plugins.push(new HtmlWebpackPlugin({
        template: template+'.html',
        filename: basename+'.html',
        chunks: [key]
    }))
    console.log(template,key)
})

module.exports = webpackBaseConfig;