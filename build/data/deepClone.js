"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deepClone;
var type_1 = __importDefault(require("../type/type"));
/**
 * 深层次克隆
 * @param data {any} 数据源
 * @returns {any} any
 */
function deepClone(data) {
    var t = (0, type_1.default)(data), o, i, ni;
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
