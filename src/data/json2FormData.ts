import type from '../type/type';

/**
 * 对象转为 formdata
 * @param obj {object} 对象
 * @returns {FormData} FormData
 */
export default function json2FormData(obj: any): FormData {
  if(type(obj) !== 'object'){
    console.error('project-libs（json2FormData方法参数错误）：obj必须为对象');
    return;
  }

  let formData = new FormData();
  for (let i in obj) {
    parse(obj[i], i);
  }
  function parse(array: any, key: string) {
    if (type(array) === "undefined" || type(array) === "function") {
      return false;
    }

    switch(type(array)){
      case "array":
        if (array.length === 0) {
          formData.append(`${key}`, "");
        } else {
          for (let i in array) {
            for (let j in array[i]) {
              parse(array[i][j], `${key}[${i}].${j}`);
            }
          }
        }
        break;
      case "object":
        for (let j in array) {
          parse(array[j], `${key}.${j}`);
        }
        break;
      default:
        formData.append(key, array);
        break;
    }
  }
  return formData;
}