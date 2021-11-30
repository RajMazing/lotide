
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}=== ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE




const countLetters = function(letters) {
  const countThis = {};
  for (let i = 0; i < letters.length; i++) {
    countThis[letters.charAt(i)] = letters.split(letters.charAt(i)).length - 1 
  }
  return countThis;
  }
  

console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));


module.exports = countLetters;