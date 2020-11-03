/**
 * 判断数据类型
 * @param ele {any} 元素
 * @returns {string} boolean/number/string/function/array/date/regExp/undefined/null/object/map/set/symbol
 */
export declare function type(ele: any): string;

/**
 * 判断空对象，空数组，空字符串
 * @param obj 数组或者对象或者字符串
 * @returns boolean
 */
export declare function isEmpty(obj: Array<any> | Object): boolean;

/**
 * 验证是否可以被JSON.parse
 * @param ele {any} 元素
 * @returns {boolean} boolean
 */
export declare function isJsonString(ele: any): boolean;

/**
 * 操作 Cookie
 */
declare namespace cookie {
  interface CONFIG {
    hours?: number, // 过期时间，单位小时
    path?: string, // 路径
    domain?: string, // 域名
    secure?: boolean, // 安全策略
    httpOnly?: boolean, // 设置键值对是否可以被 js 访问
    sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None', // 用来限制第三方 Cookie
  }

  interface CookieStatic {
    defaults: CONFIG;

    /**
     * 判断cookie是否可用
     * @returns {boolean} boolean
    */
    support(): boolean;

    /**
     * 添加cookie
     * @param name {string} cookie 的键
     * @param value {string} cookie 的值，字符串
     * @param config {object} 可选配置项
     * ```
     * {
     *  hours: 过期时间，单位小时,
     *  path: 路径,
     *  domain: 域名,
     *  secure: 安全策略,
     *  httpOnly: 设置键值对是否可以被 js 访问,
     *  sameSite: 用来限制第三方 Cookie
     * } 
     * ```          
    */
    set(name: string, value: string | object, config?: CONFIG): void

    /**
     * 查询 cookie
     * @param name {string} Cookie 的键；如果参数为空则获取所有的cookie
     * @returns {string | object | null} 有参数获取单独的cookie，没有参数获取所有cookie；获取不到则返回 null
    */
    get(name?: string): string | object | null;

    /**
     * 删除 cookie
     * @param name Cookie 的键；如果参数为空，则清理所有的cookie
     * @param path 路径，默认为''
    */
    remove(name: string, path?: string): void;
  }
}
declare const cookie: cookie.CookieStatic;

/**
 * base64转码和解码
 */
declare namespace base64 {
  interface base64Static {
    /**
   * 字符串转 base64
   * @param str {string} 字符串
   * @returns {string} 字符串
   * @summary btoa() 方法不支持 IE9 及更早的 IE 版本
   */
    encode(str: string): string;

    /**
   * base64 转字符串
   * @param str {string} 字符串
   * @returns {string} 字符串
   * @summary atob() 方法不支持 IE9 及更早的 IE 版本
   */
    decode(str: string): string;
  }
}
declare const base64: base64.base64Static;

/**
 * replace 函数，可以根据指定的选项来替换内容
 * @param source {string} 需要替换的资源
 * @param option {object | object[]} 选项，可以为对象或者对象数组，{target: '<', replace: ''} 或者 [{target: '<', replace: ''}]
 * @returns {string} string
 */
export declare function replace(source: String, option: [] | {}): string;

/**
 * 从对象中根据特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要选取的属性
 */
export declare function pick(object: object, props: Array<any>);

/**
 * 从对象中排除特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要排除的属性
 */
export declare function unPick(object: object, props: Array<any>);

/**
 * 浅拷贝，才方法只针对普通对象{}和数组[]
 * @param source {any} 需要拷贝的元素
 * @returns {any} any
 */
export declare function clone(source: any): any;

/**
 * 深层次克隆
 * @param data {any} 数据源
 * @returns {any} any
 */
export declare function deepClone(data: any): any;

/**
 * 判断两个变量是否相等, 此方法用于相同数据类型的变量比较
 * @param a {any}
 * @param b {any}
 * @returns {boolean} boolean
 */
export declare function compare(a: any, b: any): Boolean;

/**
 * 数组去重
 * @param arr {array} 数组
 * @returns {array} array
 */
export declare function arrayUnique(arr: Array<any>): Array<any>;

/**
 * 获取某个元素下标,元素可以为对象
 * @param arr {Array<any>} 传入的数组
 * @param obj {any} 需要获取下标的元素
 * @returns {number} number 返回数组下标
 */
export declare function arrayIndex(arr: Array<any>, obj: any): number;

/**
 * 把数组均分成几等份，并返回一个新的数组
 * @param {*} arr 数组
 * @param {*} num 几等份
 * @returns {Array<any>} Array<any>
 */
export declare function arrayGroup(arr: Array<any>, num: number): Array<any>;

/**
 * 判断是否是安卓设备
 * @returns {boolean} boolean
 */
export declare function isAndroid(): boolean;

/**
 * 判断是否是苹果设备
 * @returns {boolean} boolean
 */
export declare function isApple(): boolean;

/**
 * 判断是否是 ios 设备
 * @returns {boolean} boolean
 */
export declare function isIos(): boolean;

/**
 * 验证是否是电话号码，可以自定义第二个号码
 * @param phone {string} 电话号码
 * @param second {array} 电话号码的第二个号码规则，可选，例如[3,4,5,7,8]
 * @returns {boolean} boolean
 */
export declare function isPhone(phone: string, second: number[]): boolean;

/**
 * 判断邮箱是否正确，可以自定义邮箱后缀
 * @param email {string} 邮箱
 * @param domains {array[string]} 域名 ["163.com"]
 * @returns {boolean} boolean
 * 默认支持的邮箱：[
  "qq.com",
  "163.com",
  "126.com",
  "vip.126.com",
  "yeah.net",
  "vip.163.com",
  "188.com",
  "sohu.com",
  "sina.cn",
  "sina.com",
  "gmail.com",
  "hotmail.com",
  "outlook.com"
]
 */
export declare function isEmail(email: string, domains: string[]): boolean;

/**
 * 判断是否为手机端
 * @returns {boolean} boolean
 */
export declare function isMobile(): boolean;

/**
 * 校验是否为不含端口号的IP地址
 * 规则：
 *  IP格式为xxx.xxx.xxx.xxx，每一项数字取值范围为0-255
 *  除0以外其他数字不能以0开头，比如02
 * @param ip {string} ip地址，类型为字符串
 * @returns {boolean} boolean
 */
export declare function isIP(ip: string): boolean;

/**
 * 验证是否是 qq 号码
 * 规则：非0开头的5位-13位整数
 * @param qq {string} qq号码，字符串
 * @returns {boolean} boolean
 */
export declare function isQQNumber(qq: string): boolean;

/**
 * 验证是否为第二代居民身份证
 * 规则：
 *  共18位，最后一位可为X(大小写均可)
 *  不能以0开头
 *  出生年月日会进行校验：年份只能为18/19/2*开头，月份只能为01-12，日只能为01-31
 * @param card {string} 身份证号码
 * @returns {boolean} boolean
 */
export declare function isIDCard(card: string): boolean;

/**
 * 验证是否为邮政编码
 * @param code {string} 邮政编码
 * @returns {boolean} boolean
 */
export declare function isPostCode(code: string): boolean;

/**
 * 复制到剪切板
 * @param str {string} 需要复制到剪贴板的文本
 * @returns {Promise} 返回一个 promise 对象
 */
export declare function copy<T>(str: string): Promise<any>;

/**
 * 在 head 中创建 css 的 link 标签 
 * @param url {string} url 地址
 */
export declare function createLink(url: string): void;

/**
 * 创建 script 标签
 * @param url {string} src的地址
 */
export declare function createScript(url: string): void;

/**
 * 基于 window.requestAnimationFrame() 滚动到浏览器顶部
 */
export declare function scrollToTop(): void;

/**
 * 获取浏览器滚动条位置
 * @returns {string} 数字
 */
export declare function getScrollTop(): number;

/**
 * 将键值对拼接成URL带参数
 * @param obj {object} 对象
 * @param encode {boolean} 是否进行encode，默认false
 * @returns {string} 字符串
 * @example
 * ```
 * urlParams({id:10, addr: 'zz'})
 * // "id=10&addr=zz"
 * 
 * urlParams({id:10, addr: 'zz'}, true)
 * // "id%3D10%26addr%3Dzz"
 * ```
 */
export declare function urlParams(obj: any, encode: boolean): string;

/**
 * 获得URL中GET请求的参数值
 * @param key {string} 参数，可选，如果没有则返回所有的键值对
 * @param href {string} 网址，如果没有则默认选取当前网址
 * @returns {string | null} 如果有值返回字符串，否则返回 null
 */
export declare function urlGet(key: string, href?: string): string | null;

/**
 * 睡眠函数
 * @param delay 睡眠时间(毫秒)，默认为 0 
 * @returns {promise} 返回一个 promise 对象
 */
export declare function sleep<T>(delay: number): Promise<T>;

/**
 * 获取当前时间戳
 * @returns {string} 字符串
 */
export declare function timestamp(): string;

/**
 * 时间美化函数
 * @param timestamp {string | number} 字符串或者数字
 * @returns {string} 返回字符串
 * @summary 规则：时间戳与当前时间进行比较
 * ```
 * 小于1分钟，显示 x分钟前
 * 小于1天，显示 x小时前
 * 大于1天，小于2天，显示昨天x(小时):x(分钟)
 * 大于2天，小于28天，显示x天前
 * 否则，显示年-月-日
 * ```
 */
export declare function timeBeauty(timestamp: string | number): string;

/**
 * 获取某一天
 * @param fill {boolean} 布尔值,是否补 0,默认为 true
 * @returns {number | string} 返回哪一天
 */
export declare function getDay(fill: boolean): number | string;

/**
 * 获取当前月份
 * @param {Boolean} fill 布尔值,是否补 0,默认为 true
 */
export declare function getMonth(fill: boolean);

/**
 * 获取年份
 * @returns {number} 返回哪一年
 */
export declare function getYear(): number;

/**
 * 对象转为 formdata
 * @param obj {object} 对象
 * @returns {FormData} FormData
 */
export declare function json2FormData(obj: any): FormData;

/**
 * 用来柯里化的函数
 * @param fn {Function}
 * @returns {any} any
 * @example
 * ```
 * let abc = function(a, b, c) {
      return [a, b, c];
    };
    const curried = curry(abc);
    curried(1)(2)(3);
    // [1,2,3]
 * ```
 */
export declare function curry(fn: Function): Function;

/**
 * 组合函数，从右向左依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   compose(a, b, c)('com')
   // test:CCCCCOM!
 * ```
 */
export declare function compose(): any;

/**
 * 管道函数，从左向右依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   pipe(a, b, c)('com')
   // TEST:CCCCCOM!
 * ```
 */
export declare function pipe(): any;