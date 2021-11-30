const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`￼￼￼  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`￼￼￼ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (let place in object) {
      if (callback(object[place])) {
          return place;
      }
  }
};

let key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars == 3) 

console.log(assertEqual(key, "Akaleri"));
console.log(assertEqual(key, "noma"));

module.exports = findKey;

