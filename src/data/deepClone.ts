import type from '../type/type';

/**
 * 深层次克隆
 * @param data {any} 数据源
 * @returns {any} any
 */
export default function deepClone(data: any): any{
  let t = type(data), o: any, i, ni;

  if(t === 'array') {
    o = [];
  }else if( t === 'object') {
    o = {};
  }else {
    return data;
  }
  
  if(t === 'array') {
    for (i = 0, ni = data.length; i < ni; i++) {
      o.push(deepClone(data[i]));
    }
    return o;
  }else if( t === 'object') {
    for( i in data) {
      o[i] = deepClone(data[i]);
    }
    return o;
  }
}