"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isQQNumber;
var type_1 = __importDefault(require("../type/type"));
/**
 * 验证是否是 qq 号码
 * 规则：非0开头的5位-13位整数
 * @param qq {string} qq号码，字符串
 * @returns {boolean} boolean
 */
function isQQNumber(qq) {
    if ((0, type_1.default)(qq) !== "string") {
        console.error("project-libs（isQQNumber方法参数错误）：qq必须为字符串");
        return false;
    }
    return /^[1-9][0-9]{4,12}$/.test(qq);
}
