const eqArrays = require('./eqArray');
const assertArraysEqual = require('./assertArrayEqual')









// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
  
// };

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     assertArraysEqual(`It has passed!`);
//   } else {
//     assertArraysEqual(`It has failed!`);
//   }
// };



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

//assertArraysEqual(middle, [1, 2, 3, 4, 5, 6]) // => [3, 4])




module.exports = middle;