# git-checker

> 在发布之前，检查当前分支是否merge过测试分支，避免出现线上故障。

## 安装

```bash
npm i git-checker -D
```

## 使用

有2种方法使用git-checker:
+ cli

```bash
./node_modules/.bin/git-checker
```
您可以很方便的将它添加到 npm scripts 中：
```js
// file:package.json
{
    ...
    "scripts": {
        "prepublish": "git-checker"
    }
    ...
}
```

+ api
在 gulp 等工具中使用：
```js
    var gc = require('git-checker')
    // 如果当前分支merge过 test*, staging*, return true, 
    // 否则，return false
    gc.hasMergedTest()

```

**欢迎 star & issue & PR**
