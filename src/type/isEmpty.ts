import type from './type';

/**
 * 判断空对象，空数组，空字符串
 * @param obj 数组或者对象或者字符串
 * @returns boolean
 */
export default function isEmpty(obj: Array<any> | Object | string): boolean {
  if (!obj) {
    return true;
  }
  if(obj === ''){
    return true;
  }
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
