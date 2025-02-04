"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = urlGet;
var type_1 = __importDefault(require("../type/type"));
/**
 * 获得URL中GET请求的参数值
 * @param key {string} 参数，可选，如果没有则返回所有的键值对
 * @param href {string} 网址，如果没有则默认选取当前网址
 * @returns {string | null} 如果有值返回字符串，否则返回 null
 */
function urlGet(key, href) {
    if (key && (0, type_1.default)(key) !== "string") {
        console.error("project-libs（urlGet方法参数错误）：key必须为字符串");
        return null;
    }
    if (href && (0, type_1.default)(href) !== "string") {
        console.error("project-libs（urlGet方法参数错误）：href必须为字符串");
        return null;
    }
    var querystr = href ? href.split("?") : window.location.href.split("?");
    if (querystr[1]) {
        var GETs = querystr[1].split("&");
        var obj_1 = {};
        GETs.forEach(function (item) {
            var _item = item.split("=");
            obj_1[_item[0]] = decodeURIComponent(_item[1]);
        });
        return key ? obj_1[key] : obj_1;
    }
    return null;
}
