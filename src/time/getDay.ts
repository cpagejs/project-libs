/**
 * 获取某一天
 * @param fill {boolean} 布尔值,是否补 0,默认为 true
 * @returns {number | string} 返回哪一天
 */
export default function getDay(fill = true): number | string {
  const day = new Date().getDate();
  let _day: number | string = day;
  if (fill) {
    _day = day < 10 ? `0${day}` : day
  }
  return _day;
}