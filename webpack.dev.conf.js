var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.conf');
var utils = require('./utils');

function resolve(path){
    return __dirname + '/' + path;
}

var entrys = utils.getMutilEntry('./src/views/**/*.js');