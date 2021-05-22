// Use a variável parameter como parâmetro da função abaixo,
// escreva testes para verificar se a mesma está retornando como se vê na variável result e,
// caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let outArray = [];

  for (const person of people) {
    outArray.push(`${greeting}${person}`);
  }
  return outArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function', 'greetPeople não é function');

assert.deepStrictEqual(greetPeople(parameter), result, 'greetPeople não esta retornando correto')

assert.deepStrictEqual(parameter, ['Irina', 'Ashleigh', 'Elsa'], 'parameter foi alterado');
