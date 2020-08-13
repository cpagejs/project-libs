import type from '../type/type';

/**
 * 获得URL中GET请求的参数值
 * @param key {string} 参数，可选，如果没有则返回所有的键值对
 * @param href {string} 网址，如果没有则默认选取当前网址
 * @returns {string | null} 如果有值返回字符串，否则返回 null
 */
export default function urlGet(key: string, href?: string): string | null {
  if(key && type(key) !== 'string'){
    console.error('project-libs（urlGet方法参数错误）：key必须为字符串');
    return;
  }
  if(href && type(href) !== 'string'){
    console.error('project-libs（urlGet方法参数错误）：href必须为字符串');
    return;
  }

  const querystr = href ? href.split("?") : window.location.href.split("?");
  if (querystr[1]) {
    let GETs = querystr[1].split("&");
    let obj: any = {};
    GETs.forEach(item => {
      const _item = item.split("=");
      obj[_item[0]] = decodeURIComponent(_item[1]);
    });
    return key ? obj[key] : obj;
  }
  return null;
}