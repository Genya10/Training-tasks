class User {
   constructor(name,age){
    this.name = name;
    this.age = age;
   }
    getInfo(){
        return `Name:${this.name}, Age:${this.age}`
    }
}

const classOne = new User('Barbara',33)
console.log(classOne);

//////////////////////////////
class Rectangle {
    constructor(width,height){
        this.width = width,
        this.height = height
    }
    getArea(){
        return this.width * this.height
    }
}
const rectangleClass = new Rectangle(22,8);
console.log(rectangleClass.getArea());

//////////////////////////////////////////
class Book {
    constructor(title,author,pages){
        this.title = title,
        this.author = author,
        this.pages = pages
    }
    getTitleAndAuthor(){
        return `Name: ${this.title}, author: ${this.author}, pages:${this.pages}`
    }
}
const bookClass = new Book('Garry','Julian',275);
console.log(bookClass.getTitleAndAuthor())

///////////////////////////////////////////
class Car {
    constructor(brand,model,year){
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    getInfo(){
        return `Brand:${this.brand}, model:${this.model},year:${this.year}`
    }
}
const carClass = new Car('Toyota','Camry',2015);
console.log(carClass.getInfo());

///////////////////////////////////////////
class Fruit {
    constructor(name){
        this.name = name
    }
}
class Apple extends Fruit {
    constructor(name,type){
        super(name)
        this.name = name,
        this.type = type
    }
    getDescription(){
        return `Fruit ${this.name} is ${this.type}`
    }
}
const apple = new Apple('apple','green');
console.log(apple.getDescription())

//////////////////////////////////////////
class Shape {
    calculateArea(){
    }
}
class Square extends Shape {
    constructor(sideLength){
        super(),
        this.sideLength = sideLength
    }
    calculateArea(){
        return this.sideLength * this.sideLength
    }
}
const squareClass = new Square(20);
console.log(squareClass.calculateArea());

////////////////////////////////////////////////
class Vehicle {
    constructor(make,model){
        this.make = make,
        this.model = model
    }
}
class Cars extends Vehicle{
    constructor(make,model,color){
        super(make,model),
        this.color = color
    }
    getInfo(){
        return `make:${this.make},model:${this.model},color:${this.color}`
    }
}
const carsClass = new Cars('Francy','Reno', 'gray');
console.log(carsClass.getInfo())
