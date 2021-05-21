const assert = require('assert');

// const sum = (num1, num2) => num1 + num2;

// const result = sum(1, 3);

// assert.ok(result === 3, 'é tres');
// assert.strictEqual(result, 3, 'é tres ta');
// assert.notStrictEqual(result, 4, 'nao quatro');

const list1 = [1, 2, 3, 4, 5, 6];
const list2 = [1, 2, 3, 4, 5, 6, 7];

assert.deepStrictEqual(list1, list2, 'não sao iguais');
