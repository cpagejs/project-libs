"use strict";
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
exports.default = curry;
/**
 * 用来柯里化的函数
 * @param fn {Function}
 * @returns {any} any
 * @example
 * ```
 * let abc = function(a, b, c) {
      return [a, b, c];
    };
    const curried = curry(abc);
    curried(1)(2)(3);
    // [1,2,3]
 * ```
 */
function curry(fn) {
    return function aa() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (arg.length >= fn.length) {
            return fn.apply(void 0, __spreadArray([], __read(arg), false));
        }
        else {
            return aa.bind.apply(aa, __spreadArray([null], __read(arg), false));
        }
    };
}
