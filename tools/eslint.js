module.exports = {
  "root": true,
  
  "parser": "babel-eslint",
  
  "env": {
    "es6": true,
    "jasmine": true,
  },
  
  "plugins": [
    "flowtype",
    "prettier",
    "react"
  ],
  
  // Map from global var to bool specifying if it can be redefined
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
    "pit": false
  },
  
  "rules": {
    // Flow Plugin
    // The following rules are made available via `eslint-plugin-flowtype`
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    
    // General
    
    // 下面规则的具体含义参见 http://eslint.cn/docs/rules/no-extra-parens
    "comma-dangle": [2, {            // disallow trailing commas in object literals
      "arrays": "ignore",
      "objects": "ignore",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "never"
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
    "no-warning-comments": 0,        // 禁止在注释中使用特定的警告术语                      // e.g. TODO or FIXME (off by default)
    "no-with": 1,                    // 禁用 with 语句
    "radix": 1,                      // 强制在parseInt()使用基数参数 (off by default)
    "semi-spacing": 1,	             // 强制分号之前和之后使用一致的空格
    "vars-on-top": 1,                // 要求所有的 var 声明出现在它们所在的作用域顶部 (off by default)
    "wrap-iife": 1,                  // 要求 IIFE 使用括号括起来 (off by default)
    "yoda": 1,                       // 要求或禁止 “Yoda” 条件
    
    // Variables
    // These rules have to do with variable declarations.
    
    "no-catch-shadow": 1,            // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 1,              // disallow deletion of variables
    "no-label-var": 1,               // disallow labels that share a name with a variable
    "no-shadow": 1,                  // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1, // disallow shadowing of names such as arguments
    "no-undef": 2,                   // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 0,               // disallow use of undefined variable (off by default)
    "no-undef-init": 1,              // disallow use of undefined when initializing variables
    "no-unused-vars": [1, {"vars": "all", "args": "none"}], // disallow declaration of variables that are not used in the code
    "no-use-before-define": 0,       // disallow use of variables before they are defined
    
    // Node.src
    // These rules are specific to JavaScript running on Node.src.
    
    "handle-callback-err": 1,        // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 1,          // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 1,             // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 1,             // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0,            // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 1,      // restrict usage of specified node modules (off by default)
    "no-sync": 0,                    // disallow use of synchronous methods (off by default)
    
    // Prettier Plugin
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": [2, "fb", "@format"],
    
    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.
    
    "key-spacing": 0,
    "keyword-spacing": 1,            // enforce spacing before and after keywords
    "jsx-quotes": [1, "prefer-double"],
    "comma-spacing": 0,
    "no-multi-spaces": 0,
    "brace-style": 0,                // enforce one true brace style (off by default)
    "camelcase": 0,                  // require camel case names
    "consistent-this": [1, "self"],            // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1,                   // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0,                 // require function expressions to have a name (off by default)
    "func-style": 0,                 // enforces use of function declarations or expressions (off by default)
    "new-cap": 0,                    // require a capital letter for constructors
    "new-parens": 1,                 // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-nested-ternary": 0,          // disallow nested ternary expressions (off by default)
    "no-array-constructor": 1,       // disallow use of the Array constructor
    "no-lonely-if": 0,               // disallow if as the only statement in an else block (off by default)
    "no-new-object": 1,              // disallow use of the Object constructor
    "no-spaced-func": 1,             // disallow space between function identifier and application
    "no-ternary": 0,                 // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 1,         // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0,       // disallow dangling underscores in identifiers
    "no-mixed-spaces-and-tabs": 1,   // disallow mixed spaces and tabs for indentation
    "quotes": [1, "single", "avoid-escape"], // specify whether double or single quotes should be used
    "quote-props": 0,                // require quotes around object literal property names (off by default)
    "semi": 1,                       // require or disallow use of semicolons instead of ASI
    "sort-vars": 0,                  // sort variables within the same declaration block (off by default)
    "space-in-brackets": 0,          // require or disallow spaces inside brackets (off by default)
    "space-in-parens": 0,            // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 1,            // require spaces around operators
    "space-unary-ops": [1, { "words": true, "nonwords": false }], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "max-nested-callbacks": 0,       // specify the maximum depth callbacks can be nested (off by default)
    "one-var": 0,                    // allow just one var statement per function (off by default)
    "wrap-regex": 0,                 // require regex literals to be wrapped in parentheses (off by default)
    
    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
    
    "max-depth": 0,                  // specify the maximum depth that blocks can be nested (off by default)
    "max-len": 0,                    // specify the maximum length of a line in your program (off by default)
    "max-params": 0,                 // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0,             // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 1,                 // disallow use of bitwise operators (off by default)
    "no-plusplus": 0,                // disallow use of unary operators, ++ and -- (off by default)
    
    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0
  }
}