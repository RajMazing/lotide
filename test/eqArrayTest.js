// const assertEqual = require('../assertEqual')
// const eqArrays = require('../eqArray')

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


// const assert = require('chai').assert;
// const eqArray   = require('../eqArray');

// describe("#eqArray", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
//   });


//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(eqArray(['5']), '5'); 
//   });
// });


const assert = require('chai').assert;
const eqArrays = require('../eqArray');

describe("#eqArray", () => {
    it ("returns true for [1, 2, 3], [1, 2, 3]", () => {
        assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    });
    it("returns false for [1, 2, 3], [3, 2, 1]", () => {
        assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
    });

    it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
        assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']))
    });

    it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
        assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]))
    });
    
    
});