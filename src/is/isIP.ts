import type from '../type/type';

/**
 * 校验是否为不含端口号的IP地址
 * 规则：
 *  IP格式为xxx.xxx.xxx.xxx，每一项数字取值范围为0-255
 *  除0以外其他数字不能以0开头，比如02
 * @param ip {string} ip地址，类型为字符串
 * @returns {boolean} boolean
 */
export default function isIP(ip: string): boolean {
  if(type(ip) !== 'string'){
    console.error('project-libs（isIP方法参数错误）：ip必须为字符串');
    return;
  }

  return /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(ip);
}