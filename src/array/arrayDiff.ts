import type from '../type/type';

/**
 * 获取两个数组的差集
 * @param a Array<any>
 * @param b Array<any>
 * @returns Array[]
 */
export default function arrayDiff(a: Array<any>, b: Array<any>): any[] {
  if(type(a) !== 'array' || type(b) !== 'array'){
    console.error('project-libs（arrayDiff方法参数错误）：参数必须为数组');
    return;
  }
  
  return Array.from(new Set(a.concat(b).filter((v) => !new Set(a).has(v) || !new Set(b).has(v))));
}