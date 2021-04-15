module.exports = {
  env: {
    'es6': true,
    'node': true
  },
  globals: {},
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  parser: 'babel-eslint',
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 'off',
    'no-unused-vars': 'warn'
  }
};
