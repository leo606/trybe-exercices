// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');

function sumAllNumbers() {
  let sum = 0;
  numbers.forEach((index) => sum += index);
  return sum
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
