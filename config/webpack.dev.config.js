/**
 * Webpack Dev Configuration
 */

/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.base');
var locale = process.env.LOCALE || 'en-US';
var config = webpackConfig(locale);

var babelConfig = {
    test: /\.js?$/,
    loaders: 'babel-loader',
    exclude: /(node_modules)/,
};

// http://www.cnblogs.com/Answer1215/p/4312265.html
// The source map file will only be downloaded if you have source maps enabled and your dev tools open.
config.devtool = 'eval-source-map';
config.entry = config.entry.concat([
    `webpack-dev-server/client?http://localhost:9000`,
    'webpack/hot/dev-server'
]);
config.module.rules.push(babelConfig);
config.output.path = __dirname;
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;