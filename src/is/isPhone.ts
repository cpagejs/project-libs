/**
 * 验证是否是电话号码，可以自定义第二个号码
 * @param phone {string} 电话号码
 * @param second {array} 电话号码的第二个号码规则，可选，例如[3,4,5,7,8]
 * @returns {boolean} boolean
 */
export default function isPhone(phone: string, second: number[] = [3,4,5,7,8]): boolean {
  const reg = new RegExp(`^[1]${JSON.stringify(second)}[0-9]{9}$`);
  return reg.test(phone);
}