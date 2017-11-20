module.exports = {
  "root": true,
  
  "parser": "babel-eslint", // 使用的解析器
  "extends": "airbnb",
  "env": {
    "es6": true // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
  },
  
  "plugins": [
    "flowtype",
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
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "jest": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": true,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
    "pit": false,
    "Request": true
  },
  
  "rules": {
    // Flow Plugin
    // The following rules are made available via `eslint-plugin-flowtype`
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    
    // General
    
    // 下面规则的具体含义参见 http://eslint.cn/docs/rules/
    "comma-dangle": [2, {            // 要求或禁止使用末尾逗号
      "arrays": "never",
      "objects": "ignore",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    
    "no-cond-assign": 1,             // 禁止条件表达式中出现赋值操作符，比如 if (age = 16){}
    "no-console": 0,                 // 不允许使用 console (在 node 环境中默认关闭)
    "no-const-assign": 2,            // 禁止修改 const 声明的变量
    "no-constant-condition": 0,      // 禁止在条件中使用常量表达式
    "no-control-regex": 1,           // 禁止在正则表达式中使用控制字符
    "no-debugger": 1,                // 禁止使用 debugger
    "no-dupe-keys": 1,               // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-empty": 0,                   // 块语句中的内容不能为空
    "no-ex-assign": 1,               // 禁止给 catch 语句中的异常参数赋值
    "no-extra-boolean-cast": 1,      // 禁止不必要的布尔类型转换，参见 http://eslint.cn/docs/rules/no-extra-boolean-cast
    "no-extra-semi": 1,              // 禁用不必要的分号
    "no-func-assign": 1,             // 禁止对 function 声明重新赋值
    "no-inner-declarations": 1,      // 禁止在嵌套的块中出现变量声明或 function 声明
    "no-invalid-regexp": 1,          // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    "no-negated-in-lhs": 1,          // in 操作符的左边不能有!
    "no-obj-calls": 2,               // 禁止把全局对象作为函数调用
    "no-regex-spaces": 1,            // 禁止正则表达式字面量中出现多个空格
    "no-reserved-keys": 0,           // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 2,           // 禁用稀疏数组，比如：var colors = [ "red",, "blue" ];
    "no-unreachable": 2,             // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    "use-isnan": 2,                  // 要求使用 isNaN() 检查 NaN
    "valid-typeof": 2,               // 强制 typeof 表达式与有效的字符串进行比较
    "class-methods-use-this": 0,
    // 这些规则是关于最佳实践的，帮助你避免一些问题:
    
    "block-scoped-var": 1,           // 强制把变量的使用限制在其定义的作用域范围内（默认关闭）
    "consistent-return": 0,          // 要求 return 语句要么总是指定返回的值，要么不指定
    "curly": 0,                      // 强制所有控制语句使用一致的括号风格,要求遵循大括号约定
    "default-case": 1,               // 要求 switch 语句中有 default 分支
    "dot-notation": 0,               // 强制尽可能地使用点号
    "eqeqeq": [1, "always", {"null": "ignore"}],     // 要求使用 === 和 !==
    "guard-for-in": 0,               // 要求 for-in 循环中有一个 if 语句（默认关闭）
    "no-alert": 1,                   // 禁用 alert、confirm 和 prompt
    "no-caller": 2,                  // 禁用 arguments.caller 或 arguments.callee
    "no-div-regex": 1,               // 禁止除法操作符显式的出现在正则表达式开始的位置（默认关闭）
    "no-else-return": 2,             // 禁止在 else 前有 return（默认关闭）
    "no-eq-null": 1,                 // 禁止在没有类型检查操作符的情况下与 null 进行比较（默认关闭）
    "no-eval": 1,                    // 禁用 eval()
    "no-extend-native": 1,           // 禁止扩展原生类型
    "no-extra-bind": 1,              // 禁止不必要的 .bind() 调用
    "no-fallthrough": 1,             // 禁止 case 语句落空
    "no-floating-decimal": 1,        // 禁止数字字面量中使用前导和末尾小数点（默认关闭）
    "no-implied-eval": 1,            // 禁止使用类似 eval() 的方法
    "no-labels": 1,                  // 禁用标签语句
    "no-iterator": 1,                // 禁用 __iterator__ 属性
    "no-lone-blocks": 2,             // 禁用不必要的嵌套块
    "no-loop-func": 0,               // 禁止在循环中出现 function 声明和表达式
    "no-multi-str": 1,               // 禁止使用多行字符串
    "no-native-reassign": 1,         // 不能重写 native 对象
    "no-new": 2,                     // /禁止在使用 new 构造一个实例后不赋值
    "no-new-func": 2,                // 禁止对 Function 对象使用 new 操作符
    "no-new-wrappers": 2,            // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-octal": 1,                   // 禁用八进制字面量
    "no-octal-escape": 1,            // 禁止在字符串中使用八进制转义序列, 例如 var foo = "Copyright \251";
    "no-proto": 1,                   // 禁用 __proto__ 属性
    "no-redeclare": 1,              // 禁止多次声明同一变量
    "no-return-assign": 1,           // 禁止在 return 语句中使用赋值语句
    "no-script-url": 2,              // 禁止使用 javascript: url
    "no-self-compare": 2,            // 禁止自身比较
    "no-sequences": 1,               // 禁用逗号操作符
    "no-unused-expressions": 1,      // 禁止出现未使用过的表达式
    "no-void": 1,                    // 禁用 void 操作符 (off by default)
    "no-warning-comments": 1,        // 禁止在注释中使用特定的警告术语                      // e.g. TODO or FIXME (off by default)
    "no-with": 1,                    // 禁用 with 语句
    "radix": 1,                      // 强制在parseInt()使用基数参数 (off by default)
    "semi-spacing": 1,	             // 强制分号之前和之后使用一致的空格
    "vars-on-top": 1,                // 要求所有的 var 声明出现在它们所在的作用域顶部 (off by default)
    "wrap-iife": 1,                  // 要求 IIFE 使用括号括起来 (off by default)
    "yoda": 1,                       // 要求或禁止 “Yoda” 条件
    
    // Variables
    // 这些规则与变量声明有关
    
    "no-catch-shadow": 1,            // 禁止 catch 子句的参数与外层作用域中的变量同名 (在 node 环境默认关闭)
    "no-delete-var": 1,              // 禁止删除变量（delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete）
    "no-label-var": 1,               // 不允许标签与变量同名
    "no-shadow": 0,                  // 禁止变量声明与外层作用域的变量同名
    "no-shadow-restricted-names": 1, // 禁止将标识符定义为受限的名字
    "no-undef": 2,                   // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undefined": 2,               // 禁止将 undefined 作为标识符
    "no-undef-init": 2,              // 不允许初始化变量值为 undefined
    "no-unused-vars": [1, {"vars": "all", "varsIgnorePattern": "[rR]eact", "args": "none"}], // 禁止出现未使用过的变量
    "no-use-before-define": 0,       // 禁止在变量定义之前使用它们
    
    // Node.js
    // 这些规则是关于Node.js的
    
    "handle-callback-err": 1,        // 要求回调函数中有容错处理
    "no-mixed-requires": 1,          // 禁止 require 调用与普通变量声明混合使用 (on by default in the node environment)
    "no-new-require": 2,             // 禁止调用 require 时使用 new 操作符(on by default in the node environment)
    "no-path-concat": 2,             // 当使用 _dirname 和 _filename 时不允许字符串拼接 (on by default in the node environment)
    "no-process-exit": 1,            // 禁用 process.exit() (process.exit() 方法在 Node.js 中被用于立即终止 Node.js 进程且退出。) (on by default in the node environment)
    "no-restricted-modules": 1,      // 禁用通过 require 加载的指定模块 (off by default)
    "no-sync": 0,                    // 禁止使用同步方法 (off by default)
    
    // Prettier Plugin
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": [2, "fb", "@format"],
    
    // Stylistic Issues
    // 这些规则是关于风格指南的，而且是非常主观的：
    
    "key-spacing": 0,
    "keyword-spacing": 1,            // 强制关键字周围空格的一致性
    "jsx-quotes": [1, "prefer-double"], // 强制在 JSX 属性中使用一致的单引号或双引号
    "comma-spacing": [1, {"before": false, "after": true}], // 在逗号的前面没有空格，逗号的后面还有空格
    "no-multi-spaces": 1, // 禁止出现多个空格
    "brace-style": 0,                // 强制在代码块中使用一致的大括号风格 (off by default)
    "camelcase": 0,                  // 强制使用 骆驼拼写法 命名约定
    "consistent-this": [1, "self"],  // 当获取当前执行环境的上下文时，强制使用一致的命名 (off by default)
    "eol-last": 1,                   // 要求或禁止文件末尾存在空行，在非空文件中存在拖尾换行是一个常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。
    "func-names": 0,                 // 要求或禁止使用命名的 function 表达式 (off by default)
    "func-style": 0,                 // 强制一致地使用 function 声明或表达式 (off by default)
    "new-cap": 0,                    // 要求构造函数首字母大写
    "new-parens": 1,                 // 要求调用无参构造函数时有圆括号
    "no-nested-ternary": 0,          // 禁止使用嵌套的三元表达式 (off by default)
    "no-array-constructor": 1,       // 禁用 Array 构造函数
    "no-lonely-if": 0,               // 禁止 if 语句作为唯一语句出现在 else 语句块中 (off by default)
    "no-new-object": 1,              // 禁用 Object 的构造函数
    "no-spaced-func": 1,             // 禁止在函数标识符和括号之间出现空格
    "no-ternary": 0,                 // 禁用三元操作符 (off by default)
    "no-trailing-spaces": [1, { "skipBlankLines": true }],         // 禁用行尾空格
    "no-underscore-dangle": 0,       // 禁止标识符中有悬空下划线
    "no-mixed-spaces-and-tabs": 1,   // 禁止空格和 tab 的混合缩进
    "quotes": [1, "single", { "allowTemplateLiterals": true }], // 强制使用一致的反勾号、双引号或单引号（"allowTemplateLiterals": true 允许字符串使用反勾号）
    "quote-props": 0,                // 要求对象字面量属性名称用引号括起来 (off by default)
    "semi": 1,                       // 要求或禁止使用分号代替 ASI 。参加知乎的讨论：https://www.zhihu.com/question/20298345
    "sort-vars": 0,                  // 要求同一个声明块中的变量按顺序排列 (off by default)
    "object-curly-spacing": 0,       // 强制在花括号中使用一致的空格
    "space-in-parens": 0,            // 强制在圆括号内使用一致的空格 (off by default)
    "space-infix-ops": 1,            // 要求操作符周围有空格
    "space-unary-ops": [1, { "words": true, "nonwords": false }], // 强制在一元操作符前后使用一致的空格 (words on by default, nonwords off by default)
    "max-nested-callbacks": 0,       // 强制回调函数最大嵌套深度 (off by default)
    "one-var": 0,                    // 强制函数中的变量在一起声明或分开声明  (off by default)
    "wrap-regex": 0,                 // 要求正则表达式被括号括起来 (off by default)
    
    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
    
    "max-depth": 0,                  // 强制可嵌套的块的最大深度 (off by default)
    "max-len": 0,                    // 强制一行的最大长度 (off by default)
    "max-params": 0,                 // 强制函数定义中最多允许的参数数量 (off by default)
    "max-statements": 0,             // 强制函数块最多允许的的语句数量 (off by default)
    "no-bitwise": 1,                 // 禁用按位运算符 (off by default)
    "no-plusplus": 0,                // 禁用一元操作符 ++ 和 -- (off by default)
    
    // React Plugin
    //  `eslint-plugin-react`.参考：https://github.com/yannickcr/eslint-plugin-react
    
    "react/display-name": 0, // 防止丢失 displayName 属性
    "react/jsx-boolean-value": 1, // 如果一个属性值是明确的 true ，把值省略不写。
    "react/jsx-no-comment-textnodes": 1, // 这条规则防止注释字符串(例如，从/ /或/或开始)不小心被注入到 JSX 语句中的文本节点。
    "react/jsx-no-duplicate-props": 2, // 防止 JSX 中的重复属性
    "react/jsx-no-undef": 2, // 在 JSX 中禁用未声明的变量
    "react/jsx-sort-props": 0, // props 按照顺序排列
    "react/jsx-key": 2, // 防止没有加 key 属性
    "react/jsx-uses-react": 1, // 防止 react 被错误的标记为未使用
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 0, // 防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 0,
    "react/no-multi-comp": 0, // 防止一个文件定义多个组件
    "react/no-string-refs": 1,
    "react/no-unknown-property": 2, // 防止使用未知的属性
    "react/prop-types": 0, // 防止 props 没有设置 propTypes 属性
    "react/react-in-jsx-scope": 2, // 防止使用 jsx 时没有引用 react
    "react/self-closing-comp": 1, // 没有内容的组件可以用单闭合标签
    "react/wrap-multilines": 0, // 防止有多行 jsx 时没有加圆括号
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": 2 // 不在 jsx 中使用 bind
  }
};