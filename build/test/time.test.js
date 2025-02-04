"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var timeBeauty_1 = require("../src/time/timeBeauty");
describe("time时间函数", function () {
    it("timeBeauty", function () {
        (0, chai_1.expect)((0, timeBeauty_1.default)("1666351987000")).to.eql("12分钟前");
    });
});
