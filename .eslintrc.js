module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'semi': 0,
    'quotes': 0,
    "indent": ["error", 4],
    "eol-last": "off",
    "padded-blocks": "off",
    "space-in-parens": "off",
    "no-multi-spaces": "off",
    "space-before-function-paren": "off",
    "space-before-blocks": "off",
    "no-multiple-empty-lines": "off",
    "comma-dangle": "off",
    "object-curly-even-spacing": "off",
    "no-trailing-spaces": "off",
    "space-unary-ops": "off",
    "no-useless-escape": "off",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
