import type from '../type/type';

/**
 * 验证是否是 qq 号码
 * 规则：非0开头的5位-13位整数
 * @param qq {string} qq号码，字符串
 * @returns {boolean} boolean
 */
export default function isQQNumber(qq: string): boolean {
  if(type(qq) !== 'string'){
    console.error('project-libs（isQQNumber方法参数错误）：qq必须为字符串');
    return;
  }

  return /^[1-9][0-9]{4,12}$/.test(qq);
}