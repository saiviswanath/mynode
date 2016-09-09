"use strict";
/// <reference path="../typings/globals/chai/index.d.ts" />
/// <reference path="../typings/globals/mocha/index.d.ts" />
var mocha = require("mocha");
var chai = require("chai");
var assert = chai.assert;
mocha.describe("Hello", function () {
    it("Hai", function () {
        assert.strictEqual(true, true, 'these booleans are strictly equal');
    });
});
//# sourceMappingURL=test.js.map