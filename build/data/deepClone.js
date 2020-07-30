"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
/**
 * 深层次克隆
 * @param data {any} 数据源
 * @returns {any} any
 */
function deepClone(data) {
    var t = type_1.default(data), o, i, ni;
    if (t === 'array') {
        o = [];
    }
    else if (t === 'object') {
        o = {};
    }
    else {
        return data;
    }
    if (t === 'array') {
        for (i = 0, ni = data.length; i < ni; i++) {
            o.push(deepClone(data[i]));
        }
        return o;
    }
    else if (t === 'object') {
        for (i in data) {
            o[i] = deepClone(data[i]);
        }
        return o;
    }
}
exports.default = deepClone;
