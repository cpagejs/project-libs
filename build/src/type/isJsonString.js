"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isJsonString;
/**
 * 验证是否可以被JSON.parse
 * @param ele {any} 元素
 * @returns {boolean} boolean
 */
function isJsonString(ele) {
    try {
        JSON.parse(ele);
    }
    catch (e) {
        return false;
    }
    return true;
}
