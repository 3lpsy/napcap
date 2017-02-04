const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const version = process.env.VERSION || require('../package.json').version
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/napcap.js',
  moduleName: 'Napcap',
  format: 'umd',
  plugins: [
    replace({ __VERSION__: version }),
    buble(),
    nodeResolve({
        jsnext: true,
        main: true,
        browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  banner:
`/**
 * napcap v${version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`
}
