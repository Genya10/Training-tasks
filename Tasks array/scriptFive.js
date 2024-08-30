//map
const numbers = [2,3,4,5]
const numbersMap = numbers.map(num => num * num)
console.log(numbersMap)

//map
const words = ["hello", "world", "javascript"]
const wordsToUpperCase = words.map( word => word.toUpperCase())
console.log(wordsToUpperCase)

//map(middle)
const names = ["John", "Jane", "Doe"]
const genders = ["male", "female", "male"]

const fullNames = names.map((name , index)=>{
    const prefix = genders[index] === 'male' ? 'Mr' : 'Ms'
    return `${prefix} ${name}`
})

console.log(fullNames)

//map(middle)
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
  ];

const productsMap = products.map(obj => {
    return `Product: ${obj.name}, Price: $${obj.price}`
})
console.log(productsMap)

//map with function
const events = [
    { event: "Conference", date: "2024-09-15-23" },
    { event: "Meeting", date: "2024-10-20" },
    { event: "Workshop", date: "2024-11-05" }
  ]

function formatDate(dateString){
    const [year, month, day] = dateString.split('-')
    return `${year}/${month}/${day}`
}
console.log(formatDate('23-45-67'))

function eventsMap(events){
    return events.map(obj =>
        `Event: ${obj.event}, Date: ${formatDate(obj.date)}`)
}
console.log(eventsMap(events))

//reduce
const listNumbers = [10, 20, 30, 40, 50];
const numbersReduce = listNumbers.reduce((acc, value)=>{
    return acc = acc + value
}, 0)
console.log(numbersReduce)

//reduce
const listFruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

const fruitsReduce = listFruits.reduce((acc, value)=>{
    if(acc[value]){
        acc[value]++
    } else {
        acc[value] = 1
    }
    return acc
},{})
console.log(fruitsReduce)

//reduce
const listNumbers1 = [10, 2, 3, 4];
const numbersReduce1 = listNumbers1.reduce((acc,value) => acc = acc * value)

console.log(numbersReduce1)