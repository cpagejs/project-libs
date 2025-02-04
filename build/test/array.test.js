"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var arrayDiff_1 = require("../src/array/arrayDiff");
var arrayIntersection_1 = require("../src/array/arrayIntersection");
describe("array数组处理", function () {
    it("arrayDiff", function () {
        var a = [1, 2];
        var b = [1, 3];
        (0, chai_1.expect)((0, arrayDiff_1.default)(a, b)).to.eql([2, 3]);
        var a2 = [1, { id: 1 }];
        var b2 = [1, 3];
        (0, chai_1.expect)((0, arrayDiff_1.default)(a2, b2)).to.eql([{ id: 1 }, 3]);
        (0, chai_1.expect)((0, arrayDiff_1.default)([{ id: 1 }, { id: 123 }], [{ id: 1 }, { id: 123456 }])).to.eql([{ id: 123456 }]);
    });
    it("arrayIntersection", function () {
        var a = [1, 2];
        var b = [1, 3];
        (0, chai_1.expect)((0, arrayIntersection_1.default)(a, b)).to.eql([1]);
    });
});
