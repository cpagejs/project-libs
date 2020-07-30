"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
/**
 * replace 函数，可以根据指定的选项来替换内容
 * @param source 需要替换的资源
 * @param option 选项，可以为对象或者对象数组，{target: '<', replace: ''} 或者 [{target: '<', replace: ''}]
 * @returns {string} string
 */
function replace(source, option) {
    if (Array.isArray(option)) {
        var _source_1 = source;
        option.forEach(function (item) {
            var reg = new RegExp(item.target, 'g');
            _source_1 = _source_1.replace(reg, item.replace);
        });
        return _source_1;
    }
    if (option.constructor === Object) {
        var reg = new RegExp(option.target, 'g');
        return source.replace(reg, option.replace);
    }
}
exports.default = replace;
