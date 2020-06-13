/**
 * 组合函数，从右向左依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   compose(a, b, c)('com')
   // test:CCCCCOM!
 * ```
 */
export default function compose(): any {
  const fns = [...arguments];
  return function (arg: any) {
    let res = arg;
    for (let i = fns.length - 1; i > -1; i--) {
      res = fns[i](res)
    }
    return res;
  }
}