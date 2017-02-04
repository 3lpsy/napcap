var path = require('path')

module.exports = {
    dev: {
        env: {
            NODE_ENV: 'dev'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: 'napcap.js',
            libraryTarget: "commonjs2",
            library: "napcap"
        }
    },
    prod: {
        env: {
            NODE_ENV: 'test'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: 'napcap.js'
        }
    }
}
