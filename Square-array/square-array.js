//Tasks:
//[-3,2,4]   Result: [4,9,16]
//[-2,-1,3,5]  Result:[1,4,9,25]

const case1 = [-3, 2, 4];
const case2 = [-2, -1, 3, 5];

//(.map): O(n) - линейная сложность. Нужно перебрать все элементы массива
//(.sort): O(n * log n) - линейно-логарифмическая сложность
function getSquare(array) {
  return array
  .map((value) => value ** 2)
  .sort((a, b)=> a - b)
}

console.log('Task one: '+ getSquare(case1))
console.log(`Task Two: ${getSquare(case2)}`)