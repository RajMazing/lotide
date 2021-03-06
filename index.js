// // index.js


const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual')
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays  = require('./eqArray');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue   = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil  = require('./takeUntil');
const without  = require('./without');



let daIndex = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
}

console.log(daIndex);

module.exports = daIndex;

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without


// };
