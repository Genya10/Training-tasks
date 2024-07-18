//structuredClone()
const original = {
    a: 10,
    b:{
        c:20
    },
    d:[1,2,3]
}

const clone = structuredClone(original)

console.log(original)
console.log(clone)
console.log(original === clone)
console.log(original !== clone)
console.log(original.b === clone.b)


const obj = {
    a:1,
    b:2
}
obj.self = obj//объект с циклической ссылкой
console.log(obj)

const clone2 = structuredClone(obj)
console.log(clone2)
console.log(clone2.self === obj.self)

////////////////////////
let array = [2,5,17,7,9,10,12,13,14,15,18];
const result = {
 even:[],
 odd:[] 
}

array.forEach(n => {
    if(n % 2 === 0){
        result.even.push(n)
    }else{
        result.odd.push(n)
    }
})
console.log('Even:'+ result.even, 'Odd:' + result.odd)


// groupBy()
const res = Map.groupBy(array, n => n % 2 === 0 ? 'even': 'odd')
console.log(res)

