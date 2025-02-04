"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var isEmpty_1 = require("../src/type/isEmpty");
describe("is类型判断相关函数", function () {
    it("isEmpty", function () {
        (0, chai_1.expect)((0, isEmpty_1.default)("")).to.be.equal(true);
        // expect(isEmpty(undefined)).to.be.equal(true);
        (0, chai_1.expect)((0, isEmpty_1.default)([])).to.be.equal(true);
        (0, chai_1.expect)((0, isEmpty_1.default)({})).to.be.equal(true);
        (0, chai_1.expect)((0, isEmpty_1.default)([1])).to.be.equal(false);
        (0, chai_1.expect)((0, isEmpty_1.default)({ id: 1 })).to.be.equal(false);
    });
});
