import type from '../type/type';
/**
 * 判断对象或者数组是否为空
 * @param obj 数组或者对象
 * @returns boolean
 */
export default function isEmpty(obj) {
    if (type(obj) === 'array') {
        // @ts-ignore
        if (!obj.length) {
            return true;
        }
    }
    if (type(obj) === 'object') {
        if (JSON.stringify(obj) === "{}") {
            return true;
        }
    }
    return false;
}
