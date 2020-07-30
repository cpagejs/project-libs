"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否是 ios 设备
 * @returns {boolean} boolean
 */
function isIos() {
    return /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase());
}
exports.default = isIos;
