
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



const map = function(arr, callback) {
  //code here
const arrResults = [];
for (let spot of arr) {
  arrResults.push(callback(spot));
}
  return arrResults;

}


const words = ["ground", "control", "to", "major", "tom"];

const thisIsTheResult = map(words, word => word[0]);
console.log(thisIsTheResult);



assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]) // output ['g', 'c', 't', 'm', 't'] It has passed! 


module.exports = map;