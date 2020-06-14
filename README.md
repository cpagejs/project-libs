# 介绍
project-libs 是一个常用函数集锦的工具库，包括浏览器、函数式、常用验证、cookie、数组处理等函数。

## 文档地址：[https://cpagejs.github.io/project-libs/](https://cpagejs.github.io/project-libs/)

## 安装
```js
// yarn
yarn add project-libs

// npm
npm install project-libs

```

## 使用
例如需要判断是否为安卓设备
```js
// 直接引入
import { isAndroid } from 'project-libs';

// 单独引入
import isAndroid from 'project-libs/build/is/isAndroid';

// 使用
if(isAndroid()){
  // 
}
```