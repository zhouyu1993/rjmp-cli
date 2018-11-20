# rimp-cli

Author: [RainJoy](https://github.com/zhouyu1993)

## Installation

``` bash
npm install -g rjmp-cli
# OR
yarn global add rjmp-cli

rjmp -v
# OR
rjmp --version
```

## Creating a Project

``` bash
rjmp init <name> [repository]
```

`name` 必填，遵循 js 变量命名原则规则，允许包含字母、数字、美元符号($)和下划线，但第一个字符不允许是数字，不允许包含空格和其他标点符号

`repository` 选填。具体查看[download-git-repo](https://github.com/flipxfx/download-git-repo)

  * GitHub - github:owner/name or simply owner/name
  * GitLab - gitlab:owner/name
  * Bitbucket - bitbucket:owner/name

  例如默认 `zhouyu1993/rjmp-template`，等同于 `github:zhouyu1993/rjmp-template`，即 `//github.com/zhouyu1993/rjmp-template`

  用户可以自定义模版，模版采用 `handlebars`，可以参考 `zhouyu1993/rjmp-template`。

  `zhouyu1993/rjmp-template` 是一个贼牛逼的微信小程序框架。【写法完全等同原生小程序；拒绝学习成本；但是可以写 scss ，而且能畅用 ES6，甚至可以引用 node_modules 包】

  后期考虑针对不同模版，开放 `render.js` 中模版渲染文件列表。

## dependencies

fs + path + child_process

commander + inquirer + download-git-repo + handlebars

chalk + log-symbols + ora
