/**
 * 判断是否是苹果设备
 * @returns {boolean} boolean
 */
export default function isApple(): boolean {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}