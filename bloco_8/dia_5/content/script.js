// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['agua', 'sorvete', 'sal'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));