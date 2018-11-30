# vue-cli-multipage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目文件结构

``` bash
|---build
|---config
|---dist #打包文件目录
|---src
    |---assets  #资源
      |---css #公用css
      |---fonts #字体库
      |---images  #图片
      |---js  #自己定义全局通用js
    |---components  #组件
    |---pages #页面
      |---index #index页面
        |---index.html
        |---index.js
        |---App.vue
      |---ranking #ranking页面
        |---components #路由组件
        |---ranking.html
        |---ranking.js
        |---App.vue
|---static
...
```

## 主要功能

``` bash
1.使用Eslint语法检查（标准语法检查及vue.js官方Eslint插件）

2.mock服务（easy-mock）

3.多页面可使用vue-router2路由

4.发送ajax请求，使用axios库

5.支持Lesscss预处理

6.支持字体图标 (阿里字体)
```

