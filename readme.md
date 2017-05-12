#git-check

> 在发布之前，检查当前分支是否merge过测试分支，避免出现线上故障。

## 安装

```bash
npm i git-check -D
```

## 使用

有2种方法使用git-check:
+ cli

```bash
./node_modules/.bin/git-check
```
您可以很方便的将它添加到 npm scripts 中：
```js
// file:package.json
{
    ...
    "scripts": {
        "prepublish": "git-check"
    }
    ...
}
```

+ api
在 gulp 等工具中使用：
```js
    var gc = require('./index.js')
    // 如果当前分支merge过 test*, staging*, return true, 
    // 否则，return false
    gc.hasMergedTest()

```

**欢迎 star & issue & PR**
