"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("../type/type");
/**
 * 复制到剪切板
 * @param str {string} 需要复制到剪贴板的文本
 * @returns {Promise} 返回一个 promise 对象
 */
function copy(str) {
    if (type_1.default(str) !== 'string') {
        console.error('project-libs（copy方法参数错误）：str必须为字符串');
        return;
    }
    return new Promise(function (resolve, reject) {
        try {
            var id = "project-libs-copy-input";
            var ele = document.getElementById(id);
            if (ele) {
                ele.value = str;
                ele.select();
                document.execCommand('copy');
            }
            else {
                var input = document.createElement("input");
                input.setAttribute("id", id);
                input.style.display = "none";
                input.style.position = "absolute";
                input.style.left = "-9999px";
                input.value = str;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
            }
            resolve({
                stauts: 1,
                data: str
            });
        }
        catch (error) {
            reject({
                status: 0,
                error: error
            });
        }
    });
}
exports.default = copy;
