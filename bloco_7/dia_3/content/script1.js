const assert = require('assert');

function division(x, y) {
  // return `${x / y}`;
  return x / y;
}

const expected = division(9, 3);
console.log(expected, '-------s');

assert.ok(expected, 3, 'Nove dividido por três é igual a três');