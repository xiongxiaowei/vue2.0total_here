# vue2.0 totals here

> A Vue.js project

## Introduction
> 自己制定的功能比较全面的vue.js框架
- 支持stylus及各种css样式的import
- 支持vuex
- 支持vue-router
- 支持vue-resource
- 支持element-ui
- 支持exprss服务器搭建
### issues
1. 感觉vuex单独引入有点麻烦，主要是es6语法校验，调试半天，我会尝试合并store.js重写
2. 异步加载不能`new Promise({})`使用new 导致异步加载不起作用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
