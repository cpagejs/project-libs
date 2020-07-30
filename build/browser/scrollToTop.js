"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 基于 window.requestAnimationFrame() 滚动到浏览器顶部
 */
function scrollToTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, top - top / 8);
    }
}
exports.default = scrollToTop;
