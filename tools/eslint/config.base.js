module.exports = {
  "root": true,
  
  "parser": "babel-eslint", // 使用的解析器
  "extends": "airbnb",
  "env": {
    "es6": true // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
  },
  
  "plugins": [
    "prettier",
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6, // ECMA6
    "sourceType": "module", // If you are working with ES6 modules:
    "ecmaFeatures": { // 表示你想使用的额外的语言特性
      "jsx": true // 启用 JSX
    }
  },
  
  // Map from global var to bool specifying if it can be redefined
  // 配置全局变量。true 表示允许变量被重写，false 表示不允许被重写。
  "globals": {
    "__DEV__": true
  },
  
  "rules": {
    "no-use-before-define": 1,
    "no-unused-vars": 1,
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 1
  }
};