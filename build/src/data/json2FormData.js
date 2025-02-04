"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = json2FormData;
var type_1 = require("../type/type");
/**
 * 对象转为 formdata
 * @param obj {object} 对象
 * @returns {FormData} FormData
 */
function json2FormData(obj) {
    if ((0, type_1.default)(obj) !== 'object') {
        console.error('project-libs（json2FormData方法参数错误）：obj必须为对象');
        return;
    }
    var formData = new FormData();
    for (var i in obj) {
        parse(obj[i], i);
    }
    function parse(array, key) {
        if ((0, type_1.default)(array) === "undefined" || (0, type_1.default)(array) === "function") {
            return false;
        }
        switch ((0, type_1.default)(array)) {
            case "array":
                if (array.length === 0) {
                    formData.append("".concat(key), "");
                }
                else {
                    for (var i in array) {
                        for (var j in array[i]) {
                            parse(array[i][j], "".concat(key, "[").concat(i, "].").concat(j));
                        }
                    }
                }
                break;
            case "object":
                for (var j in array) {
                    parse(array[j], "".concat(key, ".").concat(j));
                }
                break;
            default:
                formData.append(key, array);
                break;
        }
    }
    return formData;
}
