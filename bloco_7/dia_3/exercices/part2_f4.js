// Escreva a função findTheNeedle para passar nos testes já implementados.
const assert = require('assert');

function findTheNeedle(array, word) {
  let outIndex = -1;

  array.forEach((element, index) => {
    if (element === word){
      outIndex = index;
    }
  });

  return outIndex;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);