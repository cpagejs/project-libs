"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取当前时间戳
 * @returns {string} 字符串
 */
function timestamp() {
    return Number((new Date())).toString();
}
exports.default = timestamp;
