const employees = {
    name:'Ivan',
    middle:'Ivanovich',
    lastname:'Ivanov',
    permission:{
        age:25,
        children:'Foma',
        app:{
            first:'First app',
            second:'Second app'}

    }
}
function say ({lastname="serg",name}){
    console.log(lastname +' also if ' + name)
}
say(employees);

/*const {permission:{app:{first}}} = employees;
console.log(first);
const {second} = employees.permission.app;
console.log(second);

const child = employees.permission.children;
console.log(child);

const {permission:{children,}} = employees;
console.log(children);
const {lastname,middle, permission} = employees;
console.log(lastname,middle, permission);*/

const colors = ['red','blue',['violin','range'],'green','orange'];
const col = colors[1];
console.log(col);
const [,,[violinaa,fox]] = colors;
console.log(violinaa,fox);

const [,,,blue] = colors;
console.log(blue);

let a = 2;
let b = 4;
let c = 6;
console.log(a,b,c);
[a,b,c] = [c,a,b];
console.log(a,b,c);