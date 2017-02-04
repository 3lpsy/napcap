let path = require('path');
let config = require('./../config');

const pack = {
    context:  path.join(__dirname, '../src'),
    entry: path.join(__dirname, '../src/index.js'),
    output: config.dev.output,
    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, '../')],
            exclude: /node_modules/
          }
      ]
    },
}

module.exports = pack
