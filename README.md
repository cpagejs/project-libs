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

## 目前支持的函数
| 函数 | 作用 | 
| --- | --- | 
| type | 判断元素类型 | 
| cookie | 操作cookie，包括查询、修改、删除 | 
| copy | 复制到剪切板 | 
| createLink | 在 head 中创建 css 的 link 标签 | 
| createScript | 创建 script 标签 | 
| getScrollTop | 获取浏览器滚动条位置 | 
| createLink | 在 head 中创建 css 的 link 标签 | 
| getScrollTop | 获取浏览器滚动条位置 | 
| scrollToTop | 滚动到浏览器顶部 | 
| urlGet | 获得URL中GET请求的参数值 | 
| urlParams | 将键值对拼接成URL带参数 | 
| sleep | 睡眠函数，延迟执行 | 
| timestamp | 获取当前时间戳 | 
| timeBeauty | 时间美化函数 | 
| curry | 用来柯里化的函数 | 
| compose | 组合函数，从右向左依次执行 | 
| pipe | 管道函数，从左向右依次执行 | 
| replace | 可以根据指定的选项来替换内容 | 
| clone | 浅拷贝，才方法只针对普通对象{}和数组[] | 
| deepClone | 深层次克隆 | 
| compare | 判断两个变量是否相等, 此方法用于相同数据类型的变量比较 | 
| json2FormData | 对象转为 formdata | 
| pick | 从对象中根据特定的属性返回一个新的对象 | 
| base64 | base64 转码和解码操作 | 
| arrayUnique | 数组去重 | 
| arrayIndex | 获取某个元素下标,元素可以为对象 | 
| arrayGroup | 把数组均分成几等份，并返回一个新的数组 | 
| isEmpty | 判断空对象，空数组，空字符串 | 
| isAndroid | 判断是否是安卓设备 | 
| isApple | 判断是否是苹果设备 | 
| isIos | 判断是否是 ios 设备 | 
| isPhone | 验证是否是电话号码，可以自定义第二个号码 | 
| isEmail | 判断邮箱是否正确，可以自定义邮箱后缀 | 
| isMobile | 判断是否为手机端 | 
| isIP | 校验是否为不含端口号的IP地址 | 
| isIDCard | 验证是否为第二代居民身份证 | 
| isPostCode | 验证是否为邮政编码 | 
| isQQNumber | 验证是否是 qq 号码 | 