﻿"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = compose;
/**
 * 组合函数，从右向左依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   compose(a, b, c)('com')
   // test:CCCCCOM!
 * ```
 */
function compose() {
    var fns = __spreadArray([], __read(arguments), false);
    return function (arg) {
        var res = arg;
        for (var i = fns.length - 1; i > -1; i--) {
            res = fns[i](res);
        }
        return res;
    };
}
