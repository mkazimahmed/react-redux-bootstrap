// const webpackConfig = require('./config/webpack.config.karma');

// module.exports = function (config) {

//   config.set({

//     browsers: ['PhantomJS'],

//     captureConsole: true,

//     colors: true,

//     coverageReporter: {
//       dir: '../coverage',
//       reporters: [
//         { type: 'html', subdir: 'html' },
//         { type: 'lcov', subdir: 'lcov' },
//       ],
//     },

//     files: [
//       './node_modules/phantomjs-polyfill/bind-polyfill.js',
//       './node_modules/intl/dist/Intl.js',
//       '../src/components/**/*-test.js',
//     ],

//     // frameworks to use
//     frameworks: ['mocha', 'chai', 'chai-sinon'],

//     plugins: [
//       'karma-chai',
//       'karma-chai-sinon',
//       'karma-chrome-launcher',
//       'karma-coverage',
//       'karma-mocha',
//       'karma-mocha-reporter',
//       'karma-phantomjs-launcher',
//       'karma-sourcemap-loader',
//       'karma-spec-reporter',
//       'karma-threshold-reporter',
//       'karma-webpack',
//     ],

//     preprocessors: {
//       'src/**/*-test.js': ['webpack', 'sourcemap'],
//       'src/**/*.js': ['webpack', 'sourcemap'],
//     },

//     reporters: ['mocha', 'coverage', 'threshold'],

//     thresholdReporter: {
//         statements: 90,
//         branches: 90,
//         functions: 90,
//         lines: 90,
//     },

//     webpack: webpackConfig,
//     webpackMiddleware: {
//       noInfo: true,
//     },
//   });
// };




var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
    config.set({
        browsers: ['Chrome', 'PhantomJS'],
        frameworks: ['mocha', 'chai', 'chai-sinon'],
        files:['src/components/**/__tests__/*-test.js'],
        preprocessors: {
            'src/components/**/__tests__/*-test.js': ['webpack','sourcemap']
        },
        reporters: ['mocha', 'coverage', 'threshold'],
        client:{
            mocha: {
                timeout: '10000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};