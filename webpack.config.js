var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

function resolve(path){
    return __dirname + '/' + path;
}
module.exports = {
    devtool: '#source-map',//'#cheap-module-eval-source-map'在开发环境中使用，编译后文件非常大
    entry: {
        download: resolve('src/views/download/download.js'),
        feedback: resolve('src/views/feedback/feedback.js')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].[hash:8].js', //chunkhash代表每个模块的内容hash值，hash代表一次编译的hash值(所有输出文件的hash值一样)
        chunkFilename: '[name].[id].js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            // {
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [resolve('src')],
            //     options: {
            //         formatter: require('eslint-friendly-formatter')
            //     }
            // },
            {
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
                // options: {loaders:{
                //   scss: ExtractTextPlugin.extract({ //提取组件里的scss到单独的文件
                //       use: ['css-loader', 'sass-loader'],
                //       fallback: 'vue-style-loader'
                //   }),
                //   css: ExtractTextPlugin.extract({ //提取组件里的css到单独的文件
                //       use: 'css-loader',
                //       fallback: 'vue-style-loader'
                //   }),
                // }}
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
        //删除文件
        // new CleanWebpackPlugin(
        //     ['dist/*'], {
        //         root: __dirname,
        //         verbose: true,
        //         dry: false
        //     }
        // ),
        //公共代码提取
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor'],
        //     minChunks: //2,//模块最少被引用过多少次才会被提取到公共模块
        //     function(module){ //也可以用函数判断该模块是否需要被提取到公共模块，这里只提取node_modules下的模块
        //         var ifCommon = module.resource &&
        //         /\.js$/.test(module.resource) &&
        //         module.resource.indexOf(path.join(__dirname, 'node_modules')) === 0
        //         return ifCommon
        //     },
        // }),
        //避免每次修改业务内容时，vendor的内容改变（不使用manifest的时候，
        //vendor里需要引用业务模块，而业务模块名称每次修改可能改变）
        new webpack.optimize.CommonsChunkPlugin({
            names: ['manifest'],
            minChunks: Infinity //为无穷大时，将只提取模块加载相关的代码
        }),
        //生成html文件（可添加多个）
        new HtmlWebpackPlugin({
            title: 'download',
            template: 'src/views/download/download.html',
            filename: 'download.html',
            chunks: ['download','vendor','manifest'] //需要动态插入的模块
        }),
        new HtmlWebpackPlugin({
            title: 'feedback',
            template: 'src/views/feedback/feedback.html',
            filename: 'feedback.html',
            chunks: ['vendor','feedback','manifest']
        }),
        //压缩js代码
        new UglifyJsPlugin({
            sourceMap: true, //为false的话将会删除sourceMap文件
            uglifyOptions:{
                compress: {
                    warnings: false
                }
            }
        }),
        //优化css样式
        new OptimizeCSSPlugin({
            cssProcessorOptions:{ safe: true, map: { inline: false } }
        }),
        //css样式提取
        // new ExtractTextPlugin({filename: 'css/[name].[hash:8].css', allChunks: true}),
        //避免添加新文件时，已有模块的id被改变（可能导致vendor的内容发生改变）
        new webpack.HashedModuleIdsPlugin(),
        //打包分析工具
        //new BundleAnalyzerPlugin(),
        //作用域提升（如果模块是使用es5的方式引入的，则可减少打包后的函数模块数量）
        new webpack.optimize.ModuleConcatenationPlugin(),
        //gzip压缩(一般不需要前端去生成，服务器会自动压缩)
        // new CompressionWebpackPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.js$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        //HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件
        //需要配合webpack-hot-middleware一起使用
        new webpack.HotModuleReplacementPlugin(),
        //在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误
        new webpack.NoEmitOnErrorsPlugin(),
        //用于更友好地输出webpack的警告、错误等信息
        new FriendlyErrorsPlugin()
    ]
}