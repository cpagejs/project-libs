"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否为手机端
 * @returns {boolean} boolean
 */
function isMobile() {
    return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(navigator.userAgent.toLowerCase());
}
exports.default = isMobile;
