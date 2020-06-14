import type from '../type/type';

/**
 * 时间美化函数
 * @param timestamp {string | number} 字符串或者数字
 * @returns {string} 返回字符串
 * @summary 规则：时间戳与当前时间进行比较
 * ```
 * 小于1分钟，显示 x分钟前
 * 小于1天，显示 x小时前
 * 大于1天，小于2天，显示昨天x(小时):x(分钟)
 * 大于2天，小于28天，显示x天前
 * 否则，显示年-月-日
 * ```
 */
export default function timeBeauty(timestamp: string | number): string {
  if(!timestamp){
    console.error('project-libs（timeBeauty方法参数错误）：参数为必填项');
    return;
  }
  if(timestamp && !(type(timestamp) === 'string' || type(timestamp) === 'number') ){
    console.error('project-libs（timeBeauty方法参数错误）：参数为 string | number');
    return;
  }

  const time = Number(timestamp);
  const now = new Date();
  const date = new Date(time);
  const diffTime = now.getTime() - time;
  const minute = 60 * 1000; // 1分钟
  const hour = 60 * 60 * 1000; // 1小时
  const day = 24 * 60 * 60 * 1000; // 1天
  const diffHour = Math.floor(diffTime / hour);
  const diffMinute = Math.floor(diffTime / minute);
  const diffDay = Math.floor(diffTime / day);
  let result = '';

  if (diffTime > 0) {
    if (diffTime <= minute) {
      result = '刚刚';
    } else if (diffTime > minute && diffTime <= hour) {
      result = `${diffMinute}分钟前`;
    } else if (diffTime > hour && diffTime <= day) {
      result = `${diffHour}小时前`;
    } else if (diffTime > day && diffTime <= day * 2) {
      result = `昨天${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
    } else if (diffTime > day * 2 && diffTime <= day * 28) {
      return `${diffDay}天前`;
    } else if (diffTime > day * 28) {
      result = fullTime(date);
    }
  } else {
    result = fullTime(date);
  }

  return result;
}

function fullTime(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
}