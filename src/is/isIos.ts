/**
 * 判断是否是 ios 设备
 * @returns {boolean} boolean
 */
export default function isIos(): boolean {
  return /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase());
}