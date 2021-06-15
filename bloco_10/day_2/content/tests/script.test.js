const { sumNum, findAnimalsByType, getListAnimals } = require('../script');

// test('não deve passar', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('deveria falhar');
//     done();
//   }, 2000);
// });

// describe('função sumNum', () => {
//   it('teste de soma 5 mais 10', (done) => {
//     sumNum(5, 10, (result) => {
//       expect(result).toBe(15);
//       done();
//     });
//   });
// });

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais (resolve)', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then((list) => {
      expect(list[0].name).toEqual('Dorminhoco');
      expect(list[1].name).toEqual('Soneca');
    });
  });

  test('Retorne a lista de animais (reject)', () => {
    return getListAnimals('giraffe').catch((error) => {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    });
  });
});
