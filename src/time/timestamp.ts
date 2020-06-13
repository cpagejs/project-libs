/**
 * 获取当前时间戳
 * @returns {string} 字符串
 */
export default function timestamp(): string {
  return Number((new Date())).toString();
}