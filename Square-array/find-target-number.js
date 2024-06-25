//Tasks:
//[2,2,4],4 result: true
//[1,2,3,5], 6 result: true
//[1,1], 16  result: false

const isExistsElement = (array, target) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let result = false;

  while (leftPointer <= rightPointer) {
    const sum = array[leftPointer] + array[rightPointer];
    if (sum === target) {
      console.log(array[leftPointer], array[rightPointer]);
      return true;
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return result;
};

console.log(isExistsElement([2, 2, 4], 4));
console.log(isExistsElement([1, 2, 3, 5], 6));
console.log(isExistsElement([1, 1], 16));
console.log(isExistsElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
