/**
 * 从对象中排除特定的属性返回一个新的对象
 * @param object 对象来源
 * @param props 要排除的属性
 */
export default function unPick(object: object, props: Array<any>) {
  if (Array.isArray(props)) {
    let obj: any = {};
    for(let i in object){
      if(!props.includes(i)){
        // @ts-ignore
        obj[i] = object[i];
      }
    }
    return obj;
  }
}
