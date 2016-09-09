/// <reference path="../typings/globals/chai/index.d.ts" />
/// <reference path="../typings/globals/mocha/index.d.ts" />
import mocha =  require("mocha");
import chai =  require("chai");
let assert = chai.assert;

mocha.describe("Hello", function() {
    it("Hai", function() {
        assert.strictEqual(true, true, 'these booleans are strictly equal');
    });
});