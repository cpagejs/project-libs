"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    /**
     * 字符串转 base64
     * @param str {string} 字符串
     * @returns {string} 字符串
     * @summary btoa() 方法不支持 IE9 及更早的 IE 版本
     */
    Base64.encode = function (str) {
        var code = encodeURI(str);
        return btoa(code);
    };
    /**
     * base64 转字符串
     * @param str {string} 字符串
     * @returns {string} 字符串
     * @summary atob() 方法不支持 IE9 及更早的 IE 版本
     */
    Base64.decode = function (str) {
        var code = atob(str);
        return decodeURI(code);
    };
    return Base64;
}());
var base64 = new Base64();
exports.default = base64;
