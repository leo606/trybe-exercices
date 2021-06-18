const { test, expect } = require('@jest/globals');
const math = require('../math');

describe('testes do conteudo', () => {
  test('somar', () => {
    const spySomar = jest.spyOn(math, 'somar');

    spySomar(1, 2);
    expect(spySomar).toHaveBeenCalledTimes(1);
    expect(spySomar).toHaveBeenCalledWith(1, 2);
    expect(spySomar(1, 2)).resolves.toBe(3);
  });

  describe('mock da funcao subtrair', () => {
    math.subtrair = jest.fn();
    it('subtrair está sendo chamada', () => {
      math.subtrair(2, 1);
      expect(math.subtrair).toHaveBeenCalledTimes(1);
    });
  });
});

describe('mock da função multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar(3, 3);
  test('chamada da funcao', () => {
    expect(math.multiplicar).toHaveBeenCalled;
  });
  test('retorno da funcao', () => {
    expect(math.multiplicar(3, 3)).toBe(10);
  });
});

describe('mock da funcao somar', () => {
  math.somar = jest.fn();

  test('funcao somar', () => {
    math.somar(3, 3);
    expect(math.somar).toBeCalledTimes(1);
  });
});
