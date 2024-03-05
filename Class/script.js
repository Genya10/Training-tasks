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