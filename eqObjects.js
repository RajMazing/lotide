const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};






const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}=== ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

}





const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false



// // assertEqual(ab, ba);
// // assertEqual(ab, abc);

module.exports = eqObjects;