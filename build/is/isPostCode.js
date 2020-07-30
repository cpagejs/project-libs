"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
/**
 * 验证是否为邮政编码
 * @param code {string} 邮政编码
 * @returns {boolean} boolean
 */
function isPostCode(code) {
    if (type_1.default(code) !== 'string') {
        console.error('project-libs（isPostCode方法参数错误）：code必须为字符串');
        return;
    }
    return /^[1-9][0-9]{5}$/.test(code.toString());
}
exports.default = isPostCode;
