// How to create an object
const bigFoot = {
  name: 'Casey',
  numToes: 10,
  isTall: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
};

//accessing the values
//dot notation
console.log("doty notation--->", bigFoot.numToes);

//square bracket notation
//const key = 'isTall'
//console.log("square bracket notation ----->", bigFoot['relatives'])
//console.log("square bracket notation--->", bigFoot[key])

//how to access value in a array
console.log("What does this return--->", bigFoot.relatives[1]);

//primitives are immutable
//bigFoot.newKey = "James";
//bigFoot.relatives.push('pizza oven');
//console.log(bigFoot);

const creature = 'bigFoot';

const printDifferentCreature = function(someCreature) {
  someCreature = 'el chupacabra';
  console.log('creature during fucntion call: ', someCreature)
}

console.group('creature variable before function: ', creature);
printDifferentCreature(creature);
console.log('creature variable after function: ', creature);

const nerwCreature = {
  name: 'yeti',
  numToes: 10
}



