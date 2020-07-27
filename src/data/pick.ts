/**
 * 从对象中根据特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要选取的属性
 */
export default function pick(object: object, props: Array<any>) {
  if (Array.isArray(props)) {
    let obj: any = {};
    props.forEach(item => {
      // @ts-ignore
      obj[item] = object[item];
    });
    return obj;
  }
}
