"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取当前月份
 * @param {Boolean} fill 布尔值,是否补 0,默认为 true
 */
function getMonth(fill) {
    if (fill === void 0) { fill = true; }
    var mon = new Date().getMonth() + 1;
    var monRe = mon;
    if (fill)
        mon < 10 ? "0" + mon : mon;
    return monRe;
}
exports.default = getMonth;
