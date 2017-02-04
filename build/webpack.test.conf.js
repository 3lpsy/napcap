let path = require('path');
let config = require('./../config');

const pack = {
    context:  path.join(__dirname, '../src'),
    entry: path.join(__dirname, '../src/index.js'),
    output: config.dev.output,
    // resolve: {
    //     fallback: [path.join(__dirname, '../node_modules')],
    // },
    // resolveLoader: {
    //     fallback: [path.join(__dirname, '../node_modules')]
    // },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, '../src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        }]
    },
}

module.exports = pack
