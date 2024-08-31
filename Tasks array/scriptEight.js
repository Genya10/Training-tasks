//fill
const arr1 = [7, 14, 21, 28, 35]
console.log(arr1.fill(9,0,3))
console.log(arr1.fill(1))
console.log(arr1.fill(9,1))

//flat
const arr2 = [1, [2, [3, [4, 5]]], 6]
console.log(arr2.flat(2))
console.log(arr2.flat(3))
console.log(arr2.flat(Infinity))

//findIndex
const arr3 = [10, 20, 30, 40, 50]
console.log(arr3.findIndex(num => num > 25))

//toLocaleString
const number = 1234567.89
const formateddNumber = number.toLocaleString('en-US', {style:'currency', currency:'USD'})
console.log(formateddNumber)

const formateddNumber1 = number.toLocaleString('uk-UK', {style:'currency', currency:'USD'})
console.log(formateddNumber1)

//reduce
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
const repeatFruits = fruits.reduce((accum, value) => {
    if(accum[value]){
        accum[value]++
    } else {
        accum[value] = 1
    }
    return accum
},
{})
console.log(repeatFruits)


//callback
function greeting(name, word){
    console.log('Hello ' + name + ' I am ' + word + '!')
}

function resultGreeting(callback){
    const greet = 'World'
    const feel = ' happy'
    return callback(greet, feel)
}

resultGreeting(greeting)

//map
const freshFruits = ["apple", "banana", "cherry", "date"]
const fruitsMap = freshFruits.map(str => str.length)
console.log(fruitsMap)

//map
const animals = ["dog", "cat", "bird"]
const animalsMap = animals.map(animal => {
    return 'pet ' + animal
})
console.log(animalsMap)

//map
const numbers1 = [2, 4, 6, 8, 10]
console.log(numbers1.map(num => num *num * num))