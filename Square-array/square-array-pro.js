
const case1 = [-3, 2, 4];
const case2 = [-2, -1, 3, 5];

/*const getSquarePro = (array) => {
  const result = [];
  let leftPointer = 0;
  let rightPointer = array.length - 1;
   while(leftPointer <= rightPointer){
    let leftSquare = array[leftPointer] ** 2;
    let rightSquare = array[rightPointer] ** 2;
    
     if(leftSquare > rightSquare){
      result.unshift(leftSquare)
     } else {
      result.unshift(rightSquare)
     }
   }
   return result
}

console.log(`Task one: ${getSquarePro(case1)}`)
console.log(`Task two: ${getSquarePro(case2)}`)*/


function getSquarePro(array) {
 const result = [];
 let leftPointer = 0;
 let rightPointer = array.length - 1;
  while(leftPointer <= rightPointer){
    const leftSquare = array[leftPointer] ** 2;
    const rightSquare = array[rightPointer] ** 2;
  if(leftSquare > rightSquare){
      result.unshift(leftSquare);
      leftPointer++;
    } else {
      result.unshift(rightSquare);
      rightPointer--;
    }
  }
  return result;
}

console.log('Task one: '+ getSquarePro(case1))
console.log(`Task Two: ${getSquarePro(case2)}`)