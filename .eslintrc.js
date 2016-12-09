module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }], // 大括号风格 else 另起一行
    "semi": [2, "never"], // 不要分号
    "comma-dangle": [2, "never"], // 不要拖尾逗号
    "no-console": 0, // 不禁用 console 因为在 build 时, uglifyjs 会清除 console
    "no-param-reassign": 0, // 不禁止对函数参数再赋值,待考虑 http://eslint.cn/docs/rules/no-param-reassign
    "global-require": 0, // 不强制在模块顶部调用 require()
    "default-case": 0, // 不强制要求 switch 需要 default 分支
    "prefer-rest-params": 0
  }
}
