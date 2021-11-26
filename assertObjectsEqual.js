const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  
  if (keyObject1.length !== keyObject2) {
  
    return false;
  }
  
  
  for ( const key of keyObject1) {
    if(Array.isArray(object1[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      } else if (!eqArrays(object1[key], object2[key])) {
  
        return false;
      }
  
     } else if ( object1[key] !== object2[key]) {
  
       return false;
     }
  }
  
  return true;
  
  };
  
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  const results = eqObjects(actual, expected);
  if (results) {
    console.log(
      `✅✅✅ You know the Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Try again cause Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
    console.log(assertObjectsEqual(cd, dc)); // => true
      
const cd2 = { c: "1", d: ["2", 3, 4] };
    console.log(assertObjectsEqual(cd, cd2)); // => false