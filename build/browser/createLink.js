import type from '../type/type';
/**
 * 在 head 中创建 css 的 link 标签
 * @param url {string} url 地址
 */
export default function createLink(url) {
    if (type(url) !== 'string') {
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
