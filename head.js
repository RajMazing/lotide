const assertEqual = require('./assertEqual')



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`🛑 🛑 🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }

// };




const head = function(firstElement) {
  return firstElement[0];

};




module.exports = head;