﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getScrollTop;
/**
 * 获取浏览器滚动条位置
 */
function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}
