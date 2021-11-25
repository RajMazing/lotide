const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



//Hefzul Bari Ratul, helped me with this function
const findKeyByValue = function(object, value) {
 let output = "";
  for (let key in object) {
    if (object[value] === object.key) 
      output = key;
      
  }
  return output;
    
};



const bestTVShowsByGenre = {
  'sci_fi': 'Star Trek: Discovery',
  'comedy': 'SouthSide',
  'drama': 'The Wire'
};




assertEqual(findKeyByValue(bestTVShowsByGenre,'"The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "SouthSide"), "comedy");