var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: '#source-map',//'#cheap-module-eval-source-map'在开发环境中使用，编译后文件非常大
    entry: {
        main1: __dirname + '/src/views/download/download.js',
        main2: __dirname + '/src/views/feedback/feedback.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[id].js',
        publicPath: './'
    },
    devServer: {
        inline: true,
        hot: true
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {loaders:{
                  scss: ExtractTextPlugin.extract({ //提取组件里的scss到单独的文件
                      use: ['css-loader', 'sass-loader'],
                      fallback: 'vue-style-loader'
                  }),
                  css: ExtractTextPlugin.extract({ //提取组件里的css到单独的文件
                      use: 'css-loader',
                      fallback: 'vue-style-loader'
                  }),
                }}
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'], {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: //2,//模块最少被引用过多少次才会被提取到公共模块
            function(module){ //也可以用函数判断该模块是否需要被提取到公共模块，这里只提取node_modules下的模块
                var ifCommon = module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(path.join(__dirname, 'node_modules')) === 0
                return ifCommon
            },
        }),
        new HtmlWebpackPlugin({
            title: 'download',
            template: 'src/views/download/download.html',
            filename: 'download.html',
            chunks: ['main1','vendor']
        }),
        new HtmlWebpackPlugin({
            title: 'feedback',
            template: 'src/views/feedback/feedback.html',
            filename: 'feedback.html',
            chunks: ['vendor','main2']
        }),
        new UglifyJsPlugin({
            sourceMap: true, //为false的话将会删除sourceMap文件
            uglifyOptions:{
                compress: {
                    warnings: false
                }
            }
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions:{ safe: true, map: { inline: false } }
        }),
        new ExtractTextPlugin({filename: 'css/[name].[hash:5].css', allChunks: true})
    ]
}