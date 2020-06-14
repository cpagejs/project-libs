import type from '../type/type';
import compare from '../data/compare';

/**
 * 获取某个元素下标,元素可以为对象
 * @param arr {Array<any>} 传入的数组
 * @param obj {any} 需要获取下标的元素
 * @returns {number} number 下标，匹配不到时候返回 -1
 */
export default function arrayIndex(arr: Array<any>, obj: any): number {
  if(type(arr) !== 'array'){
    console.error('project-libs（arrayIndex方法参数错误）：arr必须为数组');
    return;
  }

  let i = arr.length;
  while (i--) {
    if (compare(arr[i], obj)) {
      return i;
    }
  }
  return -1;
}