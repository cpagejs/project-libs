/**
 * 数组去重
 * @param arr {array} 数组
 * @returns {array} array
 */
export default function arrayUnique(arr: Array<any>): Array<any> {
  return [...new Set(arr)];
}