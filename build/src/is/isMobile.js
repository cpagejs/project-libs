"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isMobile;
/**
 * 判断是否为手机端
 * @returns {boolean} boolean
 */
function isMobile() {
    return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(navigator.userAgent.toLowerCase());
}
