
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`It has passed!`);
    } else {
     console.log(`It has failed!`);
    }
  };

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




const letterPositions = function(sentence) {
  const thisObj = {};
 for(let i = 0; i < sentence.length; i++){
   let mySent = sentence[i];
  if (mySent !== " ") {
     if (thisObj[mySent]) {
       thisObj[mySent].push[i];
     } else {thisObj [mySent] = [i];
     }
 
   } 
 
 }
 return thisObj;
 
 };
 
 assertArraysEqual(letterPositions ("hello").h, [1]);
 assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);