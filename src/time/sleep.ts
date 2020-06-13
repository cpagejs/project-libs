/**
 * 睡眠函数
 * @param delay 睡眠时间(毫秒)，默认为 0 
 * @returns {promise} 返回一个 promise 对象
 */
export default async function sleep<T>(delay: number = 0): Promise<T> {
  return new Promise(resolve => setTimeout(resolve, delay));
}