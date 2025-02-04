"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
require("mocha");
var window = new jsdom_1.JSDOM("\n<!DOCTYPE html>\n<body>\n  <script src=\"../dist/projectLibs.js\"></script>\n</body>\n").window;
describe('cookie方法', function () {
    it('set', function () {
        // console.log(window);
    });
});
