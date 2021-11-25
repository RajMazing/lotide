
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`It has passed!`);
  } else {
    console.log(`It has failed!`);
  }
};



const middle = function(arr) {

  let resultArr = [];
  const lengthOfArr = arr.length;
  const midPosition = Math.ceil((lengthOfArr) / 2 - 1);
  const midPosition2 = Math.floor((lengthOfArr) / 2 + 1);

  

  if (arr.length > 2) {
    for (let index = midPosition; index < midPosition2; index++) {
      resultArr.push(arr[index]);
    }
  }
    

  return resultArr;

};

//console.log(middle, [1, 2, 3, 4, 5, 6]) // => [3, 4])


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]
