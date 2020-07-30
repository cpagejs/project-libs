"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取某一天
 * @param fill {boolean} 布尔值,是否补 0,默认为 true
 * @returns {number | string} 返回哪一天
 */
function getDay(fill) {
    if (fill === void 0) { fill = true; }
    var day = new Date().getDate();
    var _day = day;
    if (fill) {
        _day = day < 10 ? "0" + day : day;
    }
    return _day;
}
exports.default = getDay;
