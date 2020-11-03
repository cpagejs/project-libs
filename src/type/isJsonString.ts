/**
 * 验证是否可以被JSON.parse
 * @param ele {any} 元素
 * @returns {boolean} boolean
 */
export default function isJsonString(ele: any): boolean {
  try {
    JSON.parse(ele);
  } catch (e) {
    return false;
  }
  return true;
}