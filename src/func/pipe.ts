/**
 * 管道函数，从左向右依次执行
 * @returns {any} any
 * @example
 * ```
 * function a(name) { return 'test:' + name }
   function b(statement) { return statement.toUpperCase() + '!' }
   function c(str) { return str.replace(/[cC]/, 'CCCCC') }
   pipe(a, b, c)('com')
   // TEST:CCCCCOM!
 * ```
 */
export default function pipe(): any {
  const fns = [...arguments];
  return function (arg: any) {
    let res = arg;
    for (let i = 0; i < fns.length; i++) {
      res = fns[i](res);
    }
    return res;
  }
}