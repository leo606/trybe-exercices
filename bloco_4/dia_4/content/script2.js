let names = {
  person1: 'Joao',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names){
  // console.log('olá ' + names[index]);
}

let cars = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: '2020'
};

let outputLine = [];
for (let index in cars){
  console.log(index, cars[index]);
};