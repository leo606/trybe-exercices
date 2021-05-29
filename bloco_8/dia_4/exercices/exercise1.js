const assert = require("assert");

// Dada uma matriz de matrizes, transforme em uma única matriz.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acc, curr)=> acc.concat(curr))
}

// console.log(flatten());

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
