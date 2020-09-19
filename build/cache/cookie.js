"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
/**
 * 操作 cookie
 */
var cookie = {
    /**
     * 判断cookie是否可用
     * @returns {boolean} boolean
     */
    support: function () {
        if (!(document.cookie || navigator.cookieEnabled))
            return false;
        return true;
    },
    /**
     * 添加cookie
     * @param name {string} cookie 键
     * @param value {string} cookie 值
     * @param config {object} 可选配置项
     * ```
     * {
     *  hours: 过期时间，单位小时,
     *  path: 路径,
     *  domain: 域名,
     *  secure: 安全策略,
     *  httpOnly: 设置键值对是否可以被 js 访问,
     *  sameSite: 用来限制第三方 Cookie
     * }
     * ```
    */
    set: function (name, value, config) {
        if (!this.support()) {
            console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
            return;
        }
        var data = name + "=" + encodeURIComponent(value);
        if (config === null || config === void 0 ? void 0 : config.hours) {
            var d = new Date();
            d.setHours(d.getHours() + (config === null || config === void 0 ? void 0 : config.hours));
            data += "; expires=" + d.toUTCString();
        }
        if (config === null || config === void 0 ? void 0 : config.path) {
            data += "; path=" + config.path;
        }
        if (config === null || config === void 0 ? void 0 : config.domain) {
            data += "; domain=" + config.domain;
        }
        if (config === null || config === void 0 ? void 0 : config.secure) {
            data += "; secure=" + config.secure;
        }
        if (config === null || config === void 0 ? void 0 : config.httpOnly) {
            data += "; httpOnly=" + config.httpOnly;
        }
        if (config === null || config === void 0 ? void 0 : config.sameSite) {
            data += "; sameSite=" + config.sameSite;
        }
        document.cookie = data;
    },
    /**
     * 查询 cookie
     * @param name {string} Cookie 的键；如果参数为空则获取所有的cookie
     * @returns {string | object | null} 有参数获取cookie后返回字符串，没有参数获取cookie返回json；获取不到则返回 null
    */
    get: function (name) {
        if (!this.support()) {
            console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
            return;
        }
        var cs = document.cookie, arr = [], obj = {};
        arr = cs.split(';');
        if (cs !== '') {
            for (var i = 0; i < arr.length; i++) {
                var a = arr[i].split('=');
                var key = a[0].trim();
                if (key !== '') {
                    obj[key] = decodeURIComponent(a[1]);
                }
            }
            return name ? obj[name] : obj;
        }
        else {
            return null;
        }
    },
    /**
     * 删除 cookie
     * @param name Cookie 的键；如果参数为空，则清理所有的cookie
     * @param path 路径，默认为''
    */
    remove: function (name, path) {
        var _this = this;
        if (!this.support()) {
            console.error('project-libs（Cookie方法不可用）：浏览器不支持Cookie，请检查相关设置');
            return;
        }
        if (arguments.length === 0) {
            var all = this.get();
            Object.keys(all).forEach(function (item) {
                _this.set(item, "", { hours: -1 });
            });
        }
        else {
            this.set(name, path || '', { "hours": -1 });
        }
    }
};
exports.default = cookie;
