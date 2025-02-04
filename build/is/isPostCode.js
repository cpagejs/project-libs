"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isPostCode;
var type_1 = __importDefault(require("../type/type"));
/**
 * 验证是否为邮政编码
 * @param code {string} 邮政编码
 * @returns {boolean} boolean
 */
function isPostCode(code) {
    if ((0, type_1.default)(code) !== "string") {
        console.error("project-libs（isPostCode方法参数错误）：code必须为字符串");
        return false;
    }
    return /^[1-9][0-9]{5}$/.test(code.toString());
}
