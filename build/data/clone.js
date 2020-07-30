"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 浅拷贝，才方法只针对普通对象{}和数组[]
 * @param source
 * @returns {any} any
 */
function clone(source) {
    return JSON.parse(JSON.stringify(source));
}
exports.default = clone;
