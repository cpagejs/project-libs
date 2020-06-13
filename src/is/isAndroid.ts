/**
 * 判断是否是安卓设备
 * @returns {boolean} boolean
 */
export default function isAndroid(): boolean {
  return /android/i.test(navigator.userAgent.toLowerCase());
}