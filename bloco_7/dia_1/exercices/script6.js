
// ESSA É UMA FORMA DE FAZER MAS NÃO ME PARECE QUE É ISSO QUE O EXERCÍCIO PROPÕE
const findX = (parametro, string) => {
  let sentence = '';
  for (let index of string) {
    if (index === 'x') {
      sentence += `${index = parametro}`;
    } else {
      sentence += index;
    }
  }
  return sentence
}

console.log(findX('bebet', 'Tryber x aqui!'));