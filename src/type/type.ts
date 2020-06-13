/**
 * 判断数据类型
 * @param ele {any} 元素
 * @returns {string} boolean/number/string/function/array/date/regExp/undefined/null/object/map/set/symbol
 */
export default function type(ele: any): string {
  const toString = Object.prototype.toString,
    map: any = {
      "[object Boolean]": "boolean",
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
      '[object Map]': 'map',
      '[object Set]': 'set',
      '[object Symbol]': 'symbol'
    };
  return map[toString.call(ele)];
}