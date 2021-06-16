const script1 = require('../script1');

describe('testes da funcao random', () => {
  script1.randomNumber = jest.fn().mockReturnValue(33);

  test('called', () => {
    script1.randomNumber();
    script1.randomNumber();
    script1.randomNumber();
    expect(script1.randomNumber).toHaveBeenCalledTimes(3);
  });

  test('retorno', () => {
    expect(script1.randomNumber()).toBe(33);
  });
});
