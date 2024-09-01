//for
for(let num = 0; num < 5; num++){
    console.log(num * 4)
}

/////
for(let i = 1; i <= 10; i++){
    if(i %2 === 0){
        console.log(i)
    }
}

/////
for(let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5*i}`)
}

/////
let sum = 0
for(let i = 0; i <= 10; i++){
    sum += i
}
console.log(sum)

/////
const fruits = ["яблоко", "банан", "вишня"]
for(let i = 0; i <= fruits.length-1; i++){
    console.log(fruits[i])
}

/////
const numbers = [5, 12, 8, 21, 3]
let maxNumber = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
    }
}
console.log(maxNumber)

/////
let a = 0
let b = 1
console.log(a)
console.log(b)

for(let i = 2; i < 10; i++){
 
 let nextNumber = a + b
 console.log(nextNumber)

 a = b
 b = nextNumber
}