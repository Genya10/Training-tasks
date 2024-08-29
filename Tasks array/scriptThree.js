//some
let arr1 = [2,4,6,8,10]
let arrSome = arr1.some(num => num %2 === !0)
console.log(arrSome)

//every
const arr2 = [3,5,7,-2,9]
const arrEvery = arr2.every(num => num > 0)
console.log(arrEvery)

//includes
const arr3 = ["apple", "banana", "orange", "grape"]
const arrIncludes = arr3.includes("orange")
console.log(arrIncludes)

//join
const arr4 = ["Hello", "world", "this", "is", "JavaScript"]
const arrJoin = arr4.join(',')
console.log(arrJoin)

//reverse
const arr5 = [1, 2, 3, 4, 5]
console.log(arr5.reverse())

//some
let arr11 = [1, 3, 5, 7, 9];
let arr22 = [2, 4, 6, 7, 10];

console.log(arr11.some( num => arr22.includes(num)))

//every
const tel ="123-456-7890"
const array = tel.split('')
console.log(array)
const arrEvery1 = array.every(num => num === '-' | !isNaN(Number(num)))
console.log(arrEvery1)

//some
let users = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
  ];

  const idUser = 2
  const usersSome = users.some(person => person.id === idUser)
  console.log(usersSome)

  //join
  const arrName = ['John is']
  const arrLastName = ['lastname Doe']

  const fullName = arrName.concat(arrLastName)
  console.log(fullName)
  const nameString = fullName.join(' ')
  console.log(nameString)

 // reverse
 const sentence = "Hello world this is a test sentence"
 const reverseSent = sentence.split(' ').reverse().join(' ')
 console.log(reverseSent)