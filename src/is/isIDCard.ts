import type from '../type/type';

/**
 * 验证是否为第二代居民身份证
 * 规则：
 *  共18位，最后一位可为X(大小写均可)
 *  不能以0开头
 *  出生年月日会进行校验：年份只能为18/19/2*开头，月份只能为01-12，日只能为01-31
 * @param card {string} 身份证号码
 * @returns {boolean} boolean
 */
export default function isIDCard(card: string): boolean {
  if(type(card) !== 'string'){
    console.error('project-libs（isIDCard方法参数错误）：card必须为字符串');
    return;
  }

  return /^[1-9][0-9]{5}(18|19|(2[0-9]))[0-9]{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)[0-9]{3}[0-9Xx]$/.test(card);
}