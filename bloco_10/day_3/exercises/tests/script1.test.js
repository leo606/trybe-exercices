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
    script1.randomNumber = jest.fn().mockReturnValue(33);
    expect(script1.randomNumber()).toBe(33);
  });
});

describe('implementation ', () => {
  test('funcao dividir', () => {
    script1.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(script1.randomNumber(4, 2)).toBe(2);
  });
});

// describe('testar retorno original', () => {
//   test('original', () => {
//     script1.randomNumber.mockReset();
//     expect(script1.randomNumber()).toBe(44);
//   });
// });
