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
        set: function (a) {
            this._n1 = a;
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
obj1.n1 = 555;
console.log(obj1.n1);
var T02 = /** @class */ (function (_super) {
    __extends(T02, _super);
    function T02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(T02.prototype, "n1", {
        get: function () {
            return _super.prototype.n1;
        },
        set: function (a) {
            _super.prototype.n1 = a;
        },
        enumerable: false,
        configurable: true
    });
    return T02;
}(T01));
var obj2 = new T02();
console.log(obj2.n1);
obj2.n1 = 1000;
console.log(obj2.n1);
var T03 = /** @class */ (function () {
    function T03() {
        this._n1 = 33;
        this._n2 = 55;
    }
    Object.defineProperty(T03.prototype, "n1", {
        get: function () {
            return this._n1;
        },
        set: function (a) {
            this._n1 = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(T03.prototype, "n2", {
        get: function () {
            return this._n1 + this._n2;
        },
        enumerable: false,
        configurable: true
    });
    return T03;
}());
var obj3 = new T03();
console.log(obj3.n1);
///////////////////////////////
/*class Person {
  name:string;
  age:number
  constructor(name:string, age:number){
    this.name = name,
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and
      I am ${this.age} years old.`)
  }
}

const person = new Person('Jack',33)
person.greet()

class Person2 extends Person {
  work:boolean;
  constructor(name:string, age:number, work:boolean){
    super(name,age);
    this.work = work
  }
    employee(){
      console.log(`My name is ${this.name}, I am ${this.age}
           old and i am ${this.work}`)
  }
}

const worker = new Person2('Andrew', 33, true)
worker.employee()

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
