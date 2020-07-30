"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否是苹果设备
 * @returns {boolean} boolean
 */
function isApple() {
    return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}
exports.default = isApple;
