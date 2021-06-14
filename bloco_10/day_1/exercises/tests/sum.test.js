const { it, expect } = require('@jest/globals');
const sum = require('../sum');

describe('>>> Retorno da função sum', () => {
  it('4 mais 5 ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('0 mais 0 ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('lança erro ao inserir string', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('testa msg de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError(
      new Error('parameters must be numbers')
    );
  });
});
