const path = require('path');

module.exports = function karma(config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'chai-sinon'],
        plugins: [
            'karma-chai',
            'karma-chai-sinon',
            'karma-coverage',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-nyan-reporter',
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-threshold-reporter',
            'karma-webpack',
        ],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/components/**/__tests__/*-test.js',
        ],
        preprocessors: {
            'src/app.js': ['webpack', 'sourcemap'],
            'src/components/**/__tests__/*-test.js': ['webpack','sourcemap'],
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        enforce: 'pre',
                        include: [
                            path.resolve('src/components/'),
                            path.resolve('scripts'),
                        ],
                        exclude: path.resolve(__dirname, 'node_modules'),
                        query: {
                            plugins: ['transform-decorators-legacy', 'transform-regenerator'],
                        },
                    },
                    {
                        test: /\.js$/,
                        use: { loader: 'istanbul-instrumenter-loader' },
                        include: path.resolve('src/components/'),
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader',
                    },
                ],
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
            },
        },
        webpackServer: {
            noInfo: true,
        },
        reporters: ['nyan','mocha', 'coverage', 'threshold'],
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcov', subdir: 'lcov' },
            ],
        },
        thresholdReporter: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
        nyanReporter: {
            suppressErrorHighlighting: true,
        },
        coverageIstanbulReporter: {
            reports: ['text-summary'],
            fixWebpackSourcePaths: true,
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
    });
};
