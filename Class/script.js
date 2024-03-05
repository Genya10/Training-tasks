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
console.log(rectangleClass.getArea())