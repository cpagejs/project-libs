"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 创建 script 标签
 * @param url {string} src的地址
 */
function createScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
exports.default = createScript;
