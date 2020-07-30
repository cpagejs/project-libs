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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 管道函数，从左向右依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   pipe(a, b, c)('com')
   // TEST:CCCCCOM!
 * ```
 */
function pipe() {
    var fns = __spread(arguments);
    return function (arg) {
        var res = arg;
        for (var i = 0; i < fns.length; i++) {
            res = fns[i](res);
        }
        return res;
    };
}
exports.default = pipe;
