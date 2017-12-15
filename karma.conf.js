// https://medium.com/@Jukejc/setting-up-karma-to-work-with-enzyme-mocha-and-webpack-in-2017-1ab0c2e9ef00
/* eslint-disable no-var, strict */
var webpackConfig = require('./webpack.config.js');
var path = require('path');

module.exports = function(config){
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'chai-sinon'],
        plugins: [
            'karma-chai',
            'karma-chai-sinon',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-threshold-reporter',
            'karma-webpack',
        ],
        files:[
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './node_modules/intl/dist/Intl.js',
            'src/components/**/__tests__/*-test.js',
        ],
        preprocessors: {
            'src/app.js': ['webpack', 'sourcemap'],
            'src/components/**/__tests__/*-test.js': ['webpack','sourcemap']
        },
        
        client:{
            mocha: {
                timeout: '10000',
            },
        },
        thresholdReporter: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        reporters: ['mocha', 'coverage', 'threshold'],
        coverageReporter: {
            dir: '../coverage',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcov', subdir: 'lcov' },
            ],
        },
        captureConsole: true,
        colors: true,
        logLevel: config.LOG_INFO,
    });
};


// webpack: {
//     devtool: 'inline-source-map',
//     module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader',
//           exclude: path.resolve(__dirname, 'node_modules'),
//           query: {
//             plugins: ['transform-decorators-legacy', 'transform-regenerator'],
//             presets: ['react', 'es2015', 'stage-1']
//           }
//         },
//         {
//           test: /\.json$/,
//           loader: 'json-loader',
//         },
//       ]
//     },
//     externals: {
//       'react/addons': true,
//       'react/lib/ExecutionEnvironment': true,
//       'react/lib/ReactContext': true
//     }
// },