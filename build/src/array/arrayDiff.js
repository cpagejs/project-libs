"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = arrayDiff;
var type_1 = require("../type/type");
/**
 * 获取两个数组的差集
 * @param a Array<any>
 * @param b Array<any>
 * @returns Array[]
 */
function arrayDiff(a, b) {
    if ((0, type_1.default)(a) !== 'array' || (0, type_1.default)(b) !== 'array') {
        console.error('project-libs（arrayDiff方法参数错误）：参数必须为数组');
        return;
    }
    return Array.from(new Set(a.concat(b).filter(function (v) { return !new Set(a).has(v) || !new Set(b).has(v); })));
}
