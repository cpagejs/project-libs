"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isEmpty;
var type_1 = __importDefault(require("./type"));
/**
 * 判断空对象，空数组，空字符串
 * @param obj 数组或者对象或者字符串
 * @returns boolean
 */
function isEmpty(obj) {
    if (!obj) {
        return true;
    }
    if (obj === '') {
        return true;
    }
    if ((0, type_1.default)(obj) === 'array') {
        // @ts-ignore
        if (!obj.length) {
            return true;
        }
    }
    if ((0, type_1.default)(obj) === 'object') {
        if (JSON.stringify(obj) === "{}") {
            return true;
        }
    }
    return false;
}
