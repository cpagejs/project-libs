import "mocha";
import { expect } from "chai";
import timeBeauty from "../src/time/timeBeauty";

describe("time时间函数", function() {
  it("timeBeauty", function() {
    expect(timeBeauty("1666351987000")).to.eql("12分钟前");
  });
});
