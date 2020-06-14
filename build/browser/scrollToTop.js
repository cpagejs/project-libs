﻿/**
 * 基于 window.requestAnimationFrame() 滚动到浏览器顶部
 */
export default function scrollToTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, top - top / 8);
    }
}