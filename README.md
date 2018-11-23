# rimp-cli

[rjmp-cli](https://www.npmjs.com/package/rjmp-cli) 是最近学习着做的，一个微信小程序框架的 cli 工具。

框架结构以及模板语法与原生小程序几乎一模一样，更加贴近原生态，减少新手的学习成本。

在提高开发效率的同时，极大地减少了未来版本升级问题，可以根据官方更新包括组件和 API 进行无缝升级。

利用 gulp 构建项目，支持 scss 语法编写样式，autoprefixer 兼容各个主流浏览器（ios 8+，android 4.4+）。

利用 compiler.js (参考 wepy) 配合 gulp 进行 js 处理，可随意引用 npm 包，利用 babel 可以畅写 ES6。

希望大家提意见！提 issues ！

[README](https://github.com/zhouyu1993/rjmp-cli/blob/master/README.md)

[RainJoy](https://zhouyu1993.github.io)

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

`name` 必填，允许包含字母、数字

`repository` 选填，具体查看[download-git-repo](https://github.com/flipxfx/download-git-repo)

  * GitHub - github:owner/name or simply owner/name
  * GitLab - gitlab:owner/name
  * Bitbucket - bitbucket:owner/name

  例如默认 `zhouyu1993/rjmp-template`，等同于 `github:zhouyu1993/rjmp-template`，即 `https://github.com/zhouyu1993/rjmp-template`

  用户可以自定义模版，模版采用 `handlebars`，可以参考 `zhouyu1993/rjmp-template`。

  `zhouyu1993/rjmp-template` 是一个贼牛逼的微信小程序框架。【写法完全等同原生小程序；拒绝学习成本；但是可以写 scss ，而且能畅用 ES6，甚至可以引用 node_modules 包】

  后期考虑针对不同模版，开放 `src/render.js` 中模版文件渲染列表。

例如：

``` bash
rjmp init demo
```

会初始化一个名为 `demo` 的项目，其结构和默认框架 `zhouyu1993/rjmp-template` 一样。

## dependencies

fs + path + child_process

commander + inquirer + download-git-repo + handlebars

chalk + log-symbols + ora
