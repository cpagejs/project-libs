"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断两个变量是否相等, 此方法用于相同数据类型的变量比较
 * @param a {any}
 * @param b {any}
 * @returns {boolean} boolean
 */
function compare(a, b) {
    var pt = /undefined|number|string|boolean/, fn = /^(function\s*)(\w*\b)/, cr = "constructor", cn = "childNodes", pn = "parentNode";
    if (pt.test(typeof a) || pt.test(typeof b) || a === null || b === null) {
        return a === b || (isNaN(a) && isNaN(b)); //为了方便，此处假定NaN == NaN
    }
    if (a[cr] !== b[cr]) {
        return false;
    }
    switch (a[cr]) {
        case Date:
            return a.valueOf() === b.valueOf();
        case Function:
            return a.toString().replace(fn, '$1') === b.toString().replace(fn, '$1'); //硬编码中声明函数的方式会影响到toString的结果，因此用正则进行格式化
        case Array:
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i].toString() == b[i].toString()) { }
            }
            break;
        default:
            var alen = 0, blen = 0, d = void 0;
            if (a === b) {
                return true;
            }
            if (a[cn] || a[pn] || b[cn] || b[pn]) {
                return a === b;
            }
            for (d in a) {
                alen++;
            }
            for (d in b) {
                blen++;
            }
            if (alen !== blen) {
                return false;
            }
            for (d in a) {
                if (a[d].toString() != b[d].toString()) {
                    return false;
                }
            }
            break;
    }
    return true;
}
exports.default = compare;
