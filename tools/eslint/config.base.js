module.exports = {
  'root': true,

  'parser': 'babel-eslint', // 使用的解析器
  'extends': ['standard'],

  'plugins': ['react', 'react-native'],
  'parserOptions': {
    'ecmaVersion': 6, // ECMA6
    'sourceType': 'module', // If you are working with ES6 modules:
    'ecmaFeatures': { // 表示你想使用的额外的语言特性
      'jsx': true // 启用 JSX
    }
  },

  // Map from global var to bool specifying if it can be redefined
  // 配置全局变量。true 表示允许变量被重写，false 表示不允许被重写。
  'globals': {
    '__DEV__': true
  },

  'rules': {
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-unused-vars': [1, { vars: 'all', varsIgnorePattern: '[rR]eact', args: 'none' }], // 禁止出现未使用过的变量
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 1
  }
}
