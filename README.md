# rjmp-cli

[rjmp-cli](https://www.npmjs.com/package/rjmp-cli) is a `cli tool` for the WeChat mini App framework。

[README-zh](https://github.com/zhouyu1993/rjmp-cli/blob/master/README-zh.md)

[RainJoy](https://zhouyu1993.github.io)

The framework structure and template syntax are almost identical to the original WeChat applet, which is closer to the original ecology and reduces the learning cost of novices.

While improving development efficiency, it greatly reduces future version upgrade issues and can be seamlessly upgraded based on official updates including components and APIs.

Use `gulp` to build projects, support `scss` syntax writing styles, `autoprefixer` compatible with all major browsers (ios 8+, android 4.4+).

Using `compiler.js` (see `wepy.js`) with `gulp.js` for `js` processing, you can arbitrarily reference the `npm` package, and use `babel.js` to write `ES6`.

Welcome comments!

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

`name` The name of the warehouse, required, including letters, numbers, and `-` combinations.

`repository` Template warehouse, optional. View the [download-git-repo](https://github.com/flipxfx/download-git-repo) specifically.

  * GitHub - `github:owner/name` or simply `owner/name`
  * GitLab - `gitlab:owner/name`
  * Bitbucket - `bitbucket:owner/name`

For example, the following three forms will initialize a project named `demo` with the same structure as the default template `zhouyu1993/rjmp-template`.

``` bash
rjmp init demo

rjmp init demo zhouyu1993/rjmp-template

rjmp init demo github:zhouyu1993/rjmp-template
```

The users can customize the template, the template uses `handlebars`, you can refer to [zhouyu1993/rjmp-template] (https://github.com/zhouyu1993/rjmp-template).

`zhouyu1993/rjmp-template` is a thief's WeChat small program framework. [Writing is completely equivalent to WeChat applet; reject learning costs; but can write scss, and can use ES6, even reference node_modules package]

Later, consider opening a rendering list of the template files in `src/utils/render.js` for different templates.

## dependencies

fs + path + child_process

commander + inquirer + download-git-repo + handlebars

chalk + log-symbols + ora
