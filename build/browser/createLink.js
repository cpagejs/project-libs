﻿"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createLink;
var type_1 = __importDefault(require("../type/type"));
/**
 * 在 head 中创建 css 的 link 标签
 * @param url {string} url 地址
 */
function createLink(url) {
    if ((0, type_1.default)(url) !== 'string') {
        console.error('project-libs（createLink方法参数错误）：url必须为字符串');
        return;
    }
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(cssLink);
}
