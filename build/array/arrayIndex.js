"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
var compare_1 = require("../data/compare");
/**
 * 获取某个元素下标,元素可以为对象
 * @param arr {Array<any>} 传入的数组
 * @param obj {any} 需要获取下标的元素
 * @returns {number} number 下标，匹配不到时候返回 -1
 */
function arrayIndex(arr, obj) {
    if (type_1.default(arr) !== 'array') {
        console.error('project-libs（arrayIndex方法参数错误）：arr必须为数组');
        return;
    }
    var i = arr.length;
    while (i--) {
        if (compare_1.default(arr[i], obj)) {
            return i;
        }
    }
    return -1;
}
exports.default = arrayIndex;
