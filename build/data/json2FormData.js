import type from '../type/type';
/**
 * 对象转为 formdata
 * @param obj {object} 对象
 * @returns {FormData} FormData
 */
export default function json2FormData(obj) {
    if (type(obj) !== 'object') {
        console.error('@cpage/utils（json2FormData方法参数错误）：obj必须为对象');
        return;
    }
    var formData = new FormData();
    for (var i in obj) {
        parse(obj[i], i);
    }
    function parse(array, key) {
        if (type(array) === "undefined" || type(array) === "function") {
            return false;
        }
        switch (type(array)) {
            case "array":
                if (array.length === 0) {
                    formData.append("" + key, "");
                }
                else {
                    for (var i in array) {
                        for (var j in array[i]) {
                            parse(array[i][j], key + "[" + i + "]." + j);
                        }
                    }
                }
                break;
            case "object":
                for (var j in array) {
                    parse(array[j], key + "." + j);
                }
                break;
            default:
                formData.append(key, array);
                break;
        }
    }
    return formData;
}
