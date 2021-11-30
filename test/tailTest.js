// const { assert } = require('chai');
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
      assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
