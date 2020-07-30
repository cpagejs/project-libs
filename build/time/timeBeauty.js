"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
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
function timeBeauty(timestamp) {
    if (!timestamp) {
        console.error('project-libs（timeBeauty方法参数错误）：参数为必填项');
        return;
    }
    if (timestamp && !(type_1.default(timestamp) === 'string' || type_1.default(timestamp) === 'number')) {
        console.error('project-libs（timeBeauty方法参数错误）：参数为 string | number');
        return;
    }
    var time = Number(timestamp);
    var now = new Date();
    var date = new Date(time);
    var diffTime = now.getTime() - time;
    var minute = 60 * 1000; // 1分钟
    var hour = 60 * 60 * 1000; // 1小时
    var day = 24 * 60 * 60 * 1000; // 1天
    var diffHour = Math.floor(diffTime / hour);
    var diffMinute = Math.floor(diffTime / minute);
    var diffDay = Math.floor(diffTime / day);
    var result = '';
    if (diffTime > 0) {
        if (diffTime <= minute) {
            result = '刚刚';
        }
        else if (diffTime > minute && diffTime <= hour) {
            result = diffMinute + "\u5206\u949F\u524D";
        }
        else if (diffTime > hour && diffTime <= day) {
            result = diffHour + "\u5C0F\u65F6\u524D";
        }
        else if (diffTime > day && diffTime <= day * 2) {
            result = "\u6628\u5929" + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
        }
        else if (diffTime > day * 2 && diffTime <= day * 28) {
            return diffDay + "\u5929\u524D";
        }
        else if (diffTime > day * 28) {
            result = fullTime(date);
        }
    }
    else {
        result = fullTime(date);
    }
    return result;
}
exports.default = timeBeauty;
function fullTime(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
}
