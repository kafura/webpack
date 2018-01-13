// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  env: {
    browser: true,
  },
  // add your custom rules here
  'rules': {
    'eqeqeq': ['error', 'allow-null'],
    'space-before-function-paren': ["error", { "anonymous": "never", "named": "never" }],
    'spaced-comment': 0,
    'semi': ["error", "always"],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/require-default-prop': 0,
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'renderError'
      ]
    }],

    indent: "off",
    "indent-legacy":  ['error', 2, { 'SwitchCase': 1 }]
  }
}