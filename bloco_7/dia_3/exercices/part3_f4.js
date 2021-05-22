// Use a variável parameter como parâmetro da função abaixo,
// escreva testes para verificar se a mesma está retornando como se vê na variável result e,
// caso não esteja,altere o código para que ele passe nos testes.

const assert = require('assert');

function secondThirdSmallest(array) {
  let numbers = [];
  array.forEach((element) => numbers.push(element));
  numbers.sort((a, b) => a - b);
  return [numbers[1], numbers[2]];
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function', 'secondThirdSmallest isnt a function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result, 'nao retorna correto');
assert.deepStrictEqual(parameter, [4, 10, 32, 9, 21, 90, 5, 11, 8, 6], 'parameter has been changed');