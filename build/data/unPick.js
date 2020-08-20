"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 从对象中排除特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要排除的属性
 */
function unPick(object, props) {
    if (Array.isArray(props)) {
        var obj = {};
        for (var i in object) {
            if (!props.includes(i)) {
                // @ts-ignore
                obj[i] = object[i];
            }
        }
        return obj;
    }
}
exports.default = unPick;
