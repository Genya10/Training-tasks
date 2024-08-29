//push
const arr1 = [1,2,3]
const arrPush = arr1.push(4)
console.log(arrPush)
console.log(arr1)

//pop
const arr2 = ['apple', 'banana', 'cherry']
const arrPop = arr2.pop()
console.log(arr2)
console.log(arrPop)

//unshift
const arr3 = ['red', 'green', 'blue']
const arrUnshift = arr3.unshift('yellow')
console.log(arr3)
console.log(arrUnshift)

//shift
const arr4 = ['cat', 'dog', 'rabbit']
const arrShift = arr4.shift()
console.log(arr4)
console.log(arrShift)

//concat
const arr5 = [1,2,3]
const arr6 = [4,5,6]
const arr7 = [7,8,9]
const arrConcat = arr5.concat(arr6, arr7)
console.log(arrConcat)

//slice 
const arr8 = [10,20,30,40,50]
const arrSlice = arr8.slice(2,5)
console.log(arrSlice)

//indexOf
const fruits = ['apple', 'banana', 'cherry', 'banana', 'date']
const arrIndexOf = fruits.indexOf('cherry')
console.log(arrIndexOf)

//lastIndexOf
const numbers = [5,10,15,10,20,10,25]
const arrLatIndexOf = numbers.lastIndexOf(10,4)
console.log(arrLatIndexOf)

//slice + indexOf
const colors = ['red', 'blue', 'green', 'blue', 'yellow']
const indexOf = colors.indexOf('blue')
const slice = colors.slice(indexOf)
console.log(slice)

//slice + lastIndexOf
const arrNumbers = [1,2,3,4,5,3,2,1]
const lastIndexOf = arrNumbers.lastIndexOf(3)
const sliceLast = arrNumbers.slice(lastIndexOf)
console.log(sliceLast)
