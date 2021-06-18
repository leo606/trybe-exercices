const script1 = require('../script1');
// jest.mock('../script1');

describe('testes da funcao random', () => {
  test('called', () => {
    script1.randomNumber = jest.fn().mockReturnValue(33);
    script1.randomNumber();
    script1.randomNumber();
    script1.randomNumber();
    expect(script1.randomNumber).toHaveBeenCalledTimes(3);
  });

  test('retorno', () => {
    expect(script1.randomNumber()).toBe(33);
  });
});

// describe('testar retorno original', () => {
//   test('original', () => {
//     // script1.randomNumber.mockRestore();
//     expect(script1.randomNumber()).toBe(44);
//   });
// });

describe('implementation ', () => {
  test('funcao dividir', () => {
    script1.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(script1.randomNumber(4, 2)).toBe(2);
  });
});

describe('receba três parâmetros e retorne sua multiplicação', () => {
  test('multiplicacao', () => {
    script1.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(script1.randomNumber(2, 2, 2)).toBe(8);
    expect(script1.randomNumber).toHaveBeenCalledTimes(1);
    expect(script1.randomNumber).toHaveBeenCalledWith(2, 2, 2);

    script1.randomNumber.mockReset();
    script1.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(script1.randomNumber(3)).toBe(6);
    expect(script1.randomNumber).toHaveBeenCalledTimes(1);
    expect(script1.randomNumber).toHaveBeenCalledWith(3);

  });
});
