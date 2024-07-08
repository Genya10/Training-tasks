class T01 {
  private _n1: number = 33;
  private _n2: number = 55;
  public get n1(): number{
    return this._n1
  }
    public get n2():number {
   return this._n1 + this._n2
  }
}

const obj1 = new T01();
console.log(obj1.n1);

class T02 extends T01{}

const obj2 = new T02();
console.log(obj2.n2)




///////////////////////////////
class Person {
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
