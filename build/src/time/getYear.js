"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getYear;
/**
 * 获取年份
 * @returns {number} 返回哪一年
 */
function getYear() {
    return new Date().getFullYear();
}
