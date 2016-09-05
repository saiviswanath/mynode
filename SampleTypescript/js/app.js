"use strict";
class test {
    constructor(name) {
        this._n = name;
    }
    get n() {
        return this._n;
    }
    set n(a) {
        this._n = a;
    }
}
exports.test = test;
