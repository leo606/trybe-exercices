// Agora, para praticar, crie uma função que receba três parâmetros,
// sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function ex(obj, keyName, value) {
  obj[keyName] = value;
};

const names = {
  name: 'asdasd',
  cidade: 'boa'
};

ex(names, 'idade', 45);

console.log(names);