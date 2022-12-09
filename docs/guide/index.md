# 安装

## 环境支持

由于 Vue 3 不再支持 IE11, Application-theme-plus 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### 版本

Application-theme-plus 版本正在快速迭代开发中

[![Application-theme-plus version badge](https://img.shields.io/npm/v/application-theme-plus.svg?style=flat-square)](https://www.npmjs.com/package/application-theme-plus)


## 使用包管理器

**我们建议您使用包管理器 (如 NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 Application Theme Plus**,
然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install application-theme-plus --save

# Yarn
$ yarn add application-theme-plus

# pnpm
$ pnpm install application-theme-plus
```
如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) or [NPM 淘宝镜像](https://registry.npmmirror.com/).

## 浏览器引入

直接通过浏览器的 HTML 标签导入 Application Theme Plus，然后就可以使用全局变量 Application Theme Plus 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) 举例。
你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/application-theme-plus/lib/theme-plus.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/application-theme-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/application-theme-plus/lib/theme-plus.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/application-theme-plus"></script>
</head>
```

:::tip
我们建议使用 CDN 引入 Application Theme Plus 的用户在链接地址上锁定版本，以免将来 ApplicationThemePlus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com) 
:::

## Hello World

通过 CDN 的方式我们可以很容易地使用 Application Theme Plus 写出一个 Hello world 页面 [在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the