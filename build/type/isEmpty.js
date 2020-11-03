"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
/**
 * 判断空对象，空数组，空字符串
 * @param obj 数组或者对象或者字符串
 * @returns boolean
 */
function isEmpty(obj) {
    if (!obj) {
        return true;
    }
    if (obj === '') {
        return true;
    }
    if (type_1.default(obj) === 'array') {
        // @ts-ignore
        if (!obj.length) {
            return true;
        }
    }
    if (type_1.default(obj) === 'object') {
        if (JSON.stringify(obj) === "{}") {
            return true;
        }
    }
    return false;
}
exports.default = isEmpty;
