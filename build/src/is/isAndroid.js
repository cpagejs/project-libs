"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isAndroid;
/**
 * 判断是否是安卓设备
 * @returns {boolean} boolean
 */
function isAndroid() {
    return /android/i.test(navigator.userAgent.toLowerCase());
}
