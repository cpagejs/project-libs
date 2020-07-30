"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将键值对拼接成URL带参数
 * @param obj {object} 对象
 * @param encode {boolean} 是否进行encode，默认false
 * @returns {string} 字符串
 * @example
 * ```
 * urlParams({id:10, addr: 'zz'})
 * // "id=10&addr=zz"
 *
 * urlParams({id:10, addr: 'zz'}, true)
 * // "id%3D10%26addr%3Dzz"
 * ```
 */
function urlParams(obj, encode) {
    if (encode === void 0) { encode = false; }
    var urls = [];
    var add = function (key, value) {
        return key + '=' + value;
    };
    for (var k in obj) {
        urls.push(add(k, obj[k]));
    }
    var str = urls.join('&');
    return encode ? encodeURIComponent(str) : str;
}
exports.default = urlParams;
