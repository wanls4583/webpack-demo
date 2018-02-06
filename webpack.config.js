var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: false,//'#cheap-module-eval-source-map'//使用devtool只能在开发环境，不然编译后文件非常大
    entry: {
        main: __dirname + '/src/views/download/download.js',
        vendor: ["vue"]
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
                loader: 'vue-loader'
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
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            title: 'demo',
            template: 'src/views/download/download.html'
        }),
        new UglifyJsPlugin()
    ]
}