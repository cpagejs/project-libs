"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
/**
 * 把数组均分成几等份，并返回一个新的数组
 * @param {Array<any>} arr 数组
 * @param {number} num 几等份
 * @returns {Array<any>} Array<any>
 */
function arrayGroup(arr, num) {
    if (!arr || !arr.length) {
        return [];
    }
    if (type_1.default(num) != "number") {
        console.error('project-libs（arrayGroup方法参数错误）：num的必须是数字');
    }
    if (num < 0) {
        console.error('project-libs（arrayGroup方法参数错误）：num必须大于0');
    }
    var index = 0;
    var newArray = [];
    while (index < arr.length) {
        newArray.push(arr.slice(index, index += num));
    }
    return newArray;
}
exports.default = arrayGroup;
