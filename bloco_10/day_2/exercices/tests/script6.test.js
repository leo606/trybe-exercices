const {
  getListAnimals,
  findAnimalByName,
  getAnimal,
  getAnimalsAge,
} = require('../script6');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - getAnimalsAge', () => {
  it('quando existe animal com a idade 5 informada', async () => {
    expect.assertions(1);
    const animalsByAge = await getAnimalsAge(5);
    expect(animalsByAge).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
  });

  it('quando existe animal com a idade 2 informada', async () => {
    expect.assertions(1);
    const animalsByAge = await getAnimalsAge(2);
    expect(animalsByAge).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
  });

  it('quando não contém a idade informada', () => {
    expect.assertions(1);
    return getAnimalsAge(6).then((erro) => {
      expect(erro).toEqual('não contém animal com essa idade');
    });
  });
});
