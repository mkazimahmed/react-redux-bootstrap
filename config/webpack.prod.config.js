/**
 * Webpack Prod Configuration
 */

/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var locale = process.env.LOCALE || 'en-US';
var autoprefixer = require('autoprefixer');
var propsParser = require('properties-parser');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function prod() {
    var messagePath = path.resolve('i18n', `${locale}.properties`);
    var messages = propsParser.read(messagePath);

    locale = locale.substr(0, locale.indexOf('-'));

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, `../dist-${locale}`),
            filename: './bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss'],
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                'locale-data': `react-intl/locale-data/${locale}`,
                'intl-enzyme': path.resolve(__dirname, 'scripts/intl-enzyme-helper'),
            },
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loaders: 'babel-loader',
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.(jpe?g|png|gif|svg|woff2|woff)$/,
                    loader: 'file-loader',
                    options: '[path][name].[text]',
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [autoprefixer()],
                                },
                            },
                            'sass-loader',
                        ],
                    }),
                },
            ],
        },
        devtool: 'inline-source-map',
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                __I18N__: JSON.stringify({
                    locale,
                    messages,
                }),
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                },
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                beautify: true,
                comments: false,
                compress: {
                    warnings: false,
                    screw_ie8: true,
                },
            }),
        ],
    };
};
