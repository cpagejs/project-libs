/**
 * 浅拷贝，才方法只针对普通对象{}和数组[]
 * @param source
 * @returns {any} any
 */
export default function clone(source: any): any{
  return JSON.parse(JSON.stringify(source));
}