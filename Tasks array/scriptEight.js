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