import type from '../type/type';

/**
 * 验证是否为邮政编码
 * @param code {string} 邮政编码
 * @returns {boolean} boolean
 */
export default function isPostCode(code: string): boolean {
  if(type(code) !== 'string'){
    console.error('project-libs（isPostCode方法参数错误）：code必须为字符串');
    return;
  }

  return /^[1-9][0-9]{5}$/.test(code.toString());
}