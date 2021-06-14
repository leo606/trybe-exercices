const { it, expect } = require('@jest/globals');
const sum = require('../sum');

describe('>>> Retorno da função sum', () => {
  it('4 mais 5 ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
