/**
 * 获取当前月份
 * @param {Boolean} fill 布尔值,是否补 0,默认为 true
 */
export default function getMonth(fill = true) {
  const mon = new Date().getMonth() + 1
  const monRe = mon
  if (fill) mon < 10 ? `0${mon}` : mon
  return monRe
}