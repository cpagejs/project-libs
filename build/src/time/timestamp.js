"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = timestamp;
/**
 * 获取当前时间戳
 * @returns {string} 字符串
 */
function timestamp() {
    return Number((new Date())).toString();
}
