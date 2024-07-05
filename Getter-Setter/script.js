"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj1 = void 0;
var T01 = /** @class */ (function () {
    function T01(a, b) {
        this._n1 = 44;
        this._n2 = 77;
        this.access = false;
        this.token = 123;
        (this.access = a), (this.token = b);
    }
    Object.defineProperty(T01.prototype, "n1", {
        get: function () {
            return this.access ? this._n1 : 0;
        },
        enumerable: false,
        configurable: true
    });
    return T01;
}());
exports.obj1 = new T01(true, 10);
console.log(exports.obj1.access);
