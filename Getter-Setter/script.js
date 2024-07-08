var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var T01 = /** @class */ (function () {
    function T01() {
        this._n1 = 33;
        this._n2 = 55;
    }
    Object.defineProperty(T01.prototype, "n1", {
        get: function () {
            return this._n1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(T01.prototype, "n2", {
        get: function () {
            return this._n1 + this._n2;
        },
        enumerable: false,
        configurable: true
    });
    return T01;
}());
var obj1 = new T01();
console.log(obj1.n1);
var T02 = /** @class */ (function (_super) {
    __extends(T02, _super);
    function T02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T02;
}(T01));
var obj2 = new T02();
console.log(obj2.n2);
///////////////////////////////
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and \n      I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person('Jack', 33);
person.greet();
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2(name, age, work) {
        var _this = _super.call(this, name, age) || this;
        _this.work = work;
        return _this;
    }
    Person2.prototype.employee = function () {
        console.log("My name is ".concat(this.name, ", I am ").concat(this.age, " \n           old and i am ").concat(this.work));
    };
    return Person2;
}(Person));
var worker = new Person2('Andrew', 33, true);
worker.employee();
/*class T01 {
  private _n1: number = 44;
  private _n2: number = 77;
  public access: boolean = false;
  public token: number = 123;
  constructor(a: boolean, b: number) {
    (this.access = a), (this.token = b);
  }
  public get n1(): number {
    //return this.access ? this._n1 : 0;
    return this.access, this.token
  }
}

export const obj1 = new T01(true, 10);
console.log(obj1.access, obj1.token);*/
