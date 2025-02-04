"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pick;
/**
 * 从对象中根据特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要选取的属性
 */
function pick(object, props) {
    if (!Array.isArray(object) || !Array.isArray(props)) {
        console.error("对象来源和要选取的属性必须为数组！");
    }
    else {
        var obj_1 = {};
        props.forEach(function (item) {
            // @ts-ignore
            obj_1[item] = object[item];
        });
        return obj_1;
    }
}
