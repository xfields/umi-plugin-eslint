# umi-plugin-eslint

Eslint config plugin for umi.

Umi 默认 `eslint` 配置中不会读取 `.eslintrc` ，如果修改规则需要使用 `chainWebpack`。

或者直接使用本插件。

## 使用

1. 安装

`npm i umi-plugin-eslint -D`

2. 修改 `.umirc.js` 配置：

```javascript
export default {
  // 略
  plugins: [
    [
      'umi-plugin-eslint',
      // eslint-loader options:
      {
        ignore: true, // 启用 .eslintignore
        useEslintrc: true // 启用 .eslintrc
      }
    ]
  ]
}
```

[查看更多 eslint-loader 配置](https://eslint.org/docs/developer-guide/nodejs-api#cliengine)

