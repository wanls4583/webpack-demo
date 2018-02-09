var webpack = require('webpack');
var webpackProdConfig = require('./webpack.prod.conf');

//  开始 webpack 的编译
webpack(webpackProdConfig, function(err, stats) {
    // 编译成功的回调函数
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
})