﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = type;
/**
 * 判断数据类型
 * @param ele {any} 元素
 * @returns {string} boolean/number/string/function/array/date/regExp/undefined/null/object/map/set/symbol
 */
function type(ele) {
    var toString = Object.prototype.toString, map = {
        "[object Boolean]": "boolean",
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Map]': 'map',
        '[object Set]': 'set',
        '[object Symbol]': 'symbol'
    };
    return map[toString.call(ele)];
}
