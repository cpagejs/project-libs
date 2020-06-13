interface Option {
  target: string,
  replace: string
};

/**
 * replace 函数，可以根据指定的选项来替换内容
 * @param source 需要替换的资源
 * @param option 选项，可以为对象或者对象数组，{target: '<', replace: ''} 或者 [{target: '<', replace: ''}]
 * @returns {string} string
 */
export default function replace(source: String, option: Option[] | Option){
  if(Array.isArray(option)){
    let _source = source;
    option.forEach(item => {
      const reg = new RegExp(item.target, 'g');
      _source = _source.replace(reg, item.replace);
    });
    return _source;
  }

  if(option.constructor === Object){
    const reg = new RegExp(option.target, 'g');
    return source.replace(reg, option.replace);
  }
}