/**
 * 将键值对拼接成URL带参数
 * @param obj {object} 对象
 * @param encode {boolean} 是否进行encode，默认false
 * @returns {string} 字符串
 * @example
 * ```
 * urlParams({id:10, addr: 'zz'})
 * // "id=10&addr=zz"
 * 
 * urlParams({id:10, addr: 'zz'}, true)
 * // "id%3D10%26addr%3Dzz"
 * ```
 */
export default function urlParams(obj: any, encode: boolean = false): string {
  let urls = [];
  const add = function(key: string, value: string) {
    return key + '=' + value
  }
  for (let k in obj) {
    urls.push(add(k, obj[k]))
  }

  const str = urls.join('&');
  return encode ? encodeURIComponent(str) : str;
}