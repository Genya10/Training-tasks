//while
let sum = 0
let numb = 1
while(numb <= 20){
    sum += numb
    numb++
}
console.log(`sum: ${sum}`)

//while
/*const randomNumber = Math.floor(Math.random() * 10) + 1
console.log(randomNumber)

let gueesNumber = null

while(randomNumber !== gueesNumber){
    gueesNumber = parseInt(prompt('Guees number from 1 to 10'), 10)

    if(gueesNumber < randomNumber){
        alert('Too little, try again')
    } else if(gueesNumber > randomNumber){
        alert('Too much, try again')
    } else if(gueesNumber === randomNumber){
        alert('Congratilation, you are right')
    } else {
        alert('Please, enter number')
    }
}*/

//do while
let num = 0
do{
    console.log(num)
    num++
} while(num < 0)
