



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


  assertArraysEqual([1, 2, 3], [1, 2, 3]);