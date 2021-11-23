
let Passed = "✅✅✅ Assertion Passed: [actual] === [expected]";
let Failed = "🛑🛑🛑 Assertion Failed: [actual] !== [expected]";


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${Passed}`);
  } else {
    console.log(`${Failed}`);
  }

};

// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);