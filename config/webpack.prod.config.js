/**
 * Webpack Prod Configuration
 */

/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
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
config.devtool = 'inline-source-map';
config.module.rules.push(babelConfig);
config.output.path = path.resolve('dist', locale);
config.plugins = config.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    })
]);

module.exports = config;