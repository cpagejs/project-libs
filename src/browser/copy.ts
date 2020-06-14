import type from '../type/type';

/**
 * 复制到剪切板
 * @param str {string} 需要复制到剪贴板的文本
 * @returns {Promise} 返回一个 promise 对象
 */
export default function copy<T>(str: string): Promise<any> {
  if(type(str) !== 'string'){
    console.error('project-libs（copy方法参数错误）：str必须为字符串');
    return;
  }

  return new Promise((resolve, reject) => {
    try {
      const id = "project-libs-copy-input";
      const ele = (<HTMLInputElement>document.getElementById(id));
      if (ele) {
        ele.value = str;
        ele.select();
        document.execCommand('copy');
      } else {
        const input = document.createElement("input");
        input.setAttribute("id", id);
        input.style.display = "none";
        input.style.position = "absolute";
        input.style.left = "-9999px";
        input.value = str;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
      }
      resolve({
        stauts: 1,
        data: str
      });
    } catch (error) {
      reject({
        status: 0,
        error
      });
    }
  });
}