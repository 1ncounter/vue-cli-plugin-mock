## @1ncounter/vue-cli-plugin-mock

## 安装

```
vue add @1ncounter/mock
```

## Options

### Example

default

```js
// vue.config.js
module.exports = {
  ...,
  pluginOptions: {
    mock: {
      prefix: '/mock',
      entry: 'mock/index.js'
    }
  }
}
```

### 说明

|   属性 | 说明          | 类型   | 默认值        |
| -----: | ------------- | ------ | ------------- |
|  entry | mock 入口文件 | string | mock/index.js |
| prefix | mock 路由前缀 | string | /mock         |
