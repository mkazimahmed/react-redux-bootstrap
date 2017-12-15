/**
 * Webpack Configuration for Karma
 */
/* eslint-disable no-var, strict */
var propsParser = require('properties-parser');
var path = require('path');
var webpack = require('webpack');
var messagePath = path.resolve('i18n', 'en-US.properties');
var messages = propsParser.read(messagePath);
var locale = 'en';

module.exports = {
  externals: {
    cheerio: 'window',
    jsdom: 'window',
    mocha: 'mocha',
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'css!sass',
      },
      {
        test: /\.js$/,
        loader: 'isparta-loader',
        include: path.resolve('src'),
        exclude: /\/node_modules\//,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"], 
        },
        options: {
          cacheDirectory: true,
        },
        exclude: /\/node_modules\//,
        enforce: 'pre'
      }
    ],
    noParse: [/node_modules\/sinon\//],
  },
  plugins: [
    new webpack.DefinePlugin({
      __I18N__: JSON.stringify({
        locale,
        messages,
      }),
    }),
  ],

  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
      components: path.join(__dirname, 'src/components'),
      scripts: path.join(__dirname, 'scripts'),
      'i18n-locale-data': path.resolve(__dirname, 'node_modules/react-intl/locale-data/en.js'),
      'react-intl': path.resolve(__dirname, 'test-utils/react-intl-mocks.js'),
    },
    extensions: ['.css', '.js', '.jsx', '.json', '.scss'],
  },
};
