const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  });

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((anim) => anim.name === name);
      if (animal) return resolve(animal);
      return reject('Nenhum animal com esse nome!');
    }, 100);
  });
};

async function getAnimalsAge(age) {
  const animalsByAge = Animals.filter((anim) => anim.age === age);
  if (!animalsByAge.length) return 'não contém animal com essa idade';
  return animalsByAge;
}

const getAnimal = (name) => findAnimalByName(name).then((animal) => animal);

module.exports = { getListAnimals, findAnimalByName, getAnimal, getAnimalsAge };
