/**
 * 用来柯里化的函数
 * @param fn {Function}
 * @returns {any} any
 * @example
 * ```
 * let abc = function(a, b, c) {
      return [a, b, c];
    };
    const curried = curry(abc);
    curried(1)(2)(3);
    // [1,2,3]
 * ```
 */
export default function curry(fn: Function): any {
  return function aa(...arg: any) {
    if (arg.length >= fn.length) {
      return fn(...arg);
    } else {
      return aa.bind(null, ...arg);
    }
  }
}