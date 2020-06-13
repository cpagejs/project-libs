/**
 * 把数组均分成几等份，并返回一个新的数组
 * @param {Array<any>} arr 数组
 * @param {number} num 几等份
 * @returns {Array<any>} Array<any>
 */
export default function arrayGroup(arr, num) {
    if (!arr || !arr.length) {
        return [];
    }
    var index = 0;
    var newArray = [];
    while (index < arr.length) {
        newArray.push(arr.slice(index, index += num));
    }
    return newArray;
}
