function resolve(path){
    return __dirname + '/' + path;
}
module.exports = {
    module: {
        loaders: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
}