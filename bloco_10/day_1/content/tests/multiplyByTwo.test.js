const multiplyByTwo = require('../multiplyByTwo');

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(8)).toBe(16);
});

test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => multiplyByTwo()).toThrow();
});

it('testa se a mensagem de erro é "number is undefined"', () => {
  expect(() => multiplyByTwo()).toThrowError('number is undefined');
});
