const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const result = sum(1, 3);

assert.ok(result === 3, 'é tres');
assert.strictEqual(result, 3, 'é tres ta');
assert.notStrictEqual(result, 4, 'nao quatro');