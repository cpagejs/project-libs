"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否是安卓设备
 * @returns {boolean} boolean
 */
function isAndroid() {
    return /android/i.test(navigator.userAgent.toLowerCase());
}
exports.default = isAndroid;
