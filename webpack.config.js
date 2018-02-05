var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: __dirname + '/src/views/download/download.js',
        vendor: __dirname + '/src/views/components'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[id].js',
        publicPath: '/dist/'
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['public/main.*.js', 'public/manifest.*.js'], {
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
        // new UglifyJsPlugin({
        //     beautify: true,
        //     exclude: ['/node_modules/'],
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // })
    ]
}