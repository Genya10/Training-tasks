//reduce 
const numbers = [2,4,6,8,10]
function sumArray(numbers){
   return numbers.reduce((acc, value)=> acc = acc + value)
}
console.log(sumArray(numbers))

//
function countOccurrences(text){
    const arrStrings = text.reduce((accum , currentValue) => {
        if(accum[currentValue]){
            accum[currentValue]++
        } else {
            accum[currentValue] = 1
        }
        return accum
    }, 
    {})
    console.log(arrStrings)
}
const strings = ["apple", "banana", "apple", "orange", "banana", "apple"]

countOccurrences(strings)

//
const arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" }
]

function arrayToObject(arr){
   return arr.reduce((accum, currentValue) => {
    accum[currentValue.id] = currentValue.name
   return accum
    },
    {})
}

console.log(arrayToObject(arr))

//
const products = [
   {count: 6, price: 25},
   {count: 3, price: 40},
   {count: 5, price: 30},
]

const totalProducts = products.reduce((accum, currentValue)=>{
    return accum += (currentValue.count * currentValue.price)
},0)

console.log(totalProducts)


function totalPrice(names){
  const total = names.reduce((accum, value) => {
   return accum += (value.count * value.price)
  }, 0)
  return total
}
console.log(totalPrice(products))