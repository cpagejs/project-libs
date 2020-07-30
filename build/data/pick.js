"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 从对象中根据特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要选取的属性
 */
function pick(object, props) {
    if (Array.isArray(props)) {
        var obj_1 = {};
        props.forEach(function (item) {
            // @ts-ignore
            obj_1[item] = object[item];
        });
        return obj_1;
    }
}
exports.default = pick;
