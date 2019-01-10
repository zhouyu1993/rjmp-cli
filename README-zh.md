# rimp-cli

[rjmp-cli](https://www.npmjs.com/package/rjmp-cli) 是一个微信小程序框架的 cli 工具。

[README(en)](https://github.com/zhouyu1993/rjmp-cli/blob/master/README.md)

[RainJoy](https://zhouyu1993.github.io)

框架结构以及模板语法与微信小程序原生几乎一模一样，更加贴近原生态，减少新手的学习成本。

在提高开发效率的同时，极大地减少了未来版本升级问题，可以根据官方更新包括组件和 API 进行无缝升级。

利用 `gulp` 构建项目，支持 `scss` 语法编写样式，`autoprefixer` 兼容各个主流浏览器（ios 8+，android 4.4+）。

利用 `compiler.js` (参考 `wepy.js`) 配合 `gulp.js` 进行 `js` 处理，可随意引用 `npm` 包，利用 `babel.js` 可以畅写 `ES6`。

欢迎提意见！

## 安装

``` bash
npm install -g rjmp-cli
# OR
yarn global add rjmp-cli

rjmp -v
# OR
rjmp --version
```

## 创建应用

``` bash
rjmp init <name> [repository]
```

`name` 仓库名称，必填，允许包含字母、数字以及 `-` 组合。

`repository` 模版仓库，选填。具体查看[download-git-repo](https://github.com/flipxfx/download-git-repo)

  * GitHub - `github:owner/name` or simply `owner/name`
  * GitLab - `gitlab:owner/name`
  * Bitbucket - `bitbucket:owner/name`

例如下面三种形式，都会初始化一个名为 `demo` 的项目，其结构和默认模版 `zhouyu1993/rjmp-template` 一样。

``` bash
rjmp init demo

rjmp init demo zhouyu1993/rjmp-template

rjmp init demo github:zhouyu1993/rjmp-template
```

用户可以自定义模版，模版采用 `handlebars`，可以参考 [zhouyu1993/rjmp-template](https://github.com/zhouyu1993/rjmp-template)。

`zhouyu1993/rjmp-template` 是一个贼牛逼的微信小程序框架。【写法完全等同微信小程序原生；拒绝学习成本；但是可以写 scss ，而且能畅用 ES6，甚至可以引用 node_modules 包】

后期考虑针对不同模版，开放 `src/utils/render.js` 中模版文件的渲染列表。

## 依赖

fs + path + child_process

commander + inquirer + download-git-repo + handlebars

chalk + log-symbols + ora
