﻿"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQQNumber = exports.isPostCode = exports.isIDCard = exports.isIP = exports.isMobile = exports.isEmail = exports.isPhone = exports.isIos = exports.isApple = exports.isAndroid = exports.arrayIntersection = exports.arrayGroup = exports.arrayIndex = exports.arrayUnique = exports.pick = exports.base64 = exports.json2FormData = exports.compare = exports.deepClone = exports.clone = exports.replace = exports.pipe = exports.compose = exports.curry = exports.getYear = exports.getMonth = exports.getDay = exports.timeBeauty = exports.timestamp = exports.sleep = exports.urlParams = exports.urlGet = exports.scrollToTop = exports.getScrollTop = exports.createScript = exports.createLink = exports.copy = exports.cookie = exports.isJsonString = exports.isEmpty = exports.type = void 0;
// 类型
var type_1 = require("./type/type");
Object.defineProperty(exports, "type", { enumerable: true, get: function () { return __importDefault(type_1).default; } });
var isEmpty_1 = require("./type/isEmpty");
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return __importDefault(isEmpty_1).default; } });
var isJsonString_1 = require("./type/isJsonString");
Object.defineProperty(exports, "isJsonString", { enumerable: true, get: function () { return __importDefault(isJsonString_1).default; } });
// 缓存
var cookie_1 = require("./cache/cookie");
Object.defineProperty(exports, "cookie", { enumerable: true, get: function () { return __importDefault(cookie_1).default; } });
// 浏览器
var copy_1 = require("./browser/copy");
Object.defineProperty(exports, "copy", { enumerable: true, get: function () { return __importDefault(copy_1).default; } });
var createLink_1 = require("./browser/createLink");
Object.defineProperty(exports, "createLink", { enumerable: true, get: function () { return __importDefault(createLink_1).default; } });
var createScript_1 = require("./browser/createScript");
Object.defineProperty(exports, "createScript", { enumerable: true, get: function () { return __importDefault(createScript_1).default; } });
var getScrollTop_1 = require("./browser/getScrollTop");
Object.defineProperty(exports, "getScrollTop", { enumerable: true, get: function () { return __importDefault(getScrollTop_1).default; } });
var scrollToTop_1 = require("./browser/scrollToTop");
Object.defineProperty(exports, "scrollToTop", { enumerable: true, get: function () { return __importDefault(scrollToTop_1).default; } });
var urlGet_1 = require("./browser/urlGet");
Object.defineProperty(exports, "urlGet", { enumerable: true, get: function () { return __importDefault(urlGet_1).default; } });
var urlParams_1 = require("./browser/urlParams");
Object.defineProperty(exports, "urlParams", { enumerable: true, get: function () { return __importDefault(urlParams_1).default; } });
// 时间
var sleep_1 = require("./time/sleep");
Object.defineProperty(exports, "sleep", { enumerable: true, get: function () { return __importDefault(sleep_1).default; } });
var timestamp_1 = require("./time/timestamp");
Object.defineProperty(exports, "timestamp", { enumerable: true, get: function () { return __importDefault(timestamp_1).default; } });
var timeBeauty_1 = require("./time/timeBeauty");
Object.defineProperty(exports, "timeBeauty", { enumerable: true, get: function () { return __importDefault(timeBeauty_1).default; } });
var getDay_1 = require("./time/getDay");
Object.defineProperty(exports, "getDay", { enumerable: true, get: function () { return __importDefault(getDay_1).default; } });
var getMonth_1 = require("./time/getMonth");
Object.defineProperty(exports, "getMonth", { enumerable: true, get: function () { return __importDefault(getMonth_1).default; } });
var getYear_1 = require("./time/getYear");
Object.defineProperty(exports, "getYear", { enumerable: true, get: function () { return __importDefault(getYear_1).default; } });
// 函数式
var curry_1 = require("./func/curry");
Object.defineProperty(exports, "curry", { enumerable: true, get: function () { return __importDefault(curry_1).default; } });
var compose_1 = require("./func/compose");
Object.defineProperty(exports, "compose", { enumerable: true, get: function () { return __importDefault(compose_1).default; } });
var pipe_1 = require("./func/pipe");
Object.defineProperty(exports, "pipe", { enumerable: true, get: function () { return __importDefault(pipe_1).default; } });
// 数据处理
var replace_1 = require("./data/replace");
Object.defineProperty(exports, "replace", { enumerable: true, get: function () { return __importDefault(replace_1).default; } });
var clone_1 = require("./data/clone");
Object.defineProperty(exports, "clone", { enumerable: true, get: function () { return __importDefault(clone_1).default; } });
var deepClone_1 = require("./data/deepClone");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return __importDefault(deepClone_1).default; } });
var compare_1 = require("./data/compare");
Object.defineProperty(exports, "compare", { enumerable: true, get: function () { return __importDefault(compare_1).default; } });
var json2FormData_1 = require("./data/json2FormData");
Object.defineProperty(exports, "json2FormData", { enumerable: true, get: function () { return __importDefault(json2FormData_1).default; } });
var base64_1 = require("./data/base64");
Object.defineProperty(exports, "base64", { enumerable: true, get: function () { return __importDefault(base64_1).default; } });
var pick_1 = require("./data/pick");
Object.defineProperty(exports, "pick", { enumerable: true, get: function () { return __importDefault(pick_1).default; } });
// 数组
var arrayUnique_1 = require("./array/arrayUnique");
Object.defineProperty(exports, "arrayUnique", { enumerable: true, get: function () { return __importDefault(arrayUnique_1).default; } });
var arrayIndex_1 = require("./array/arrayIndex");
Object.defineProperty(exports, "arrayIndex", { enumerable: true, get: function () { return __importDefault(arrayIndex_1).default; } });
var arrayGroup_1 = require("./array/arrayGroup");
Object.defineProperty(exports, "arrayGroup", { enumerable: true, get: function () { return __importDefault(arrayGroup_1).default; } });
var arrayIntersection_1 = require("./array/arrayIntersection");
Object.defineProperty(exports, "arrayIntersection", { enumerable: true, get: function () { return __importDefault(arrayIntersection_1).default; } });
// 验证
var isAndroid_1 = require("./is/isAndroid");
Object.defineProperty(exports, "isAndroid", { enumerable: true, get: function () { return __importDefault(isAndroid_1).default; } });
var isApple_1 = require("./is/isApple");
Object.defineProperty(exports, "isApple", { enumerable: true, get: function () { return __importDefault(isApple_1).default; } });
var isIos_1 = require("./is/isIos");
Object.defineProperty(exports, "isIos", { enumerable: true, get: function () { return __importDefault(isIos_1).default; } });
var isPhone_1 = require("./is/isPhone");
Object.defineProperty(exports, "isPhone", { enumerable: true, get: function () { return __importDefault(isPhone_1).default; } });
var isEmail_1 = require("./is/isEmail");
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return __importDefault(isEmail_1).default; } });
var isMobile_1 = require("./is/isMobile");
Object.defineProperty(exports, "isMobile", { enumerable: true, get: function () { return __importDefault(isMobile_1).default; } });
var isIP_1 = require("./is/isIP");
Object.defineProperty(exports, "isIP", { enumerable: true, get: function () { return __importDefault(isIP_1).default; } });
var isIDCard_1 = require("./is/isIDCard");
Object.defineProperty(exports, "isIDCard", { enumerable: true, get: function () { return __importDefault(isIDCard_1).default; } });
var isPostCode_1 = require("./is/isPostCode");
Object.defineProperty(exports, "isPostCode", { enumerable: true, get: function () { return __importDefault(isPostCode_1).default; } });
var isQQNumber_1 = require("./is/isQQNumber");
Object.defineProperty(exports, "isQQNumber", { enumerable: true, get: function () { return __importDefault(isQQNumber_1).default; } });
