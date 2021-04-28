// EXERCICIO 1: 
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindrome(word) {
  let inputWord = word;
  let invertedWord = '';
  for (let index = (inputWord.length - 1); index >= 0; index -= 1) {
    invertedWord = invertedWord + inputWord[index];
  };
  if (invertedWord == inputWord) {
    return true;
  } else {
    return false;
  };
};

// console.log(checkPalindrome('454'));

// EXERCICIO 2: 
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor (numeros) {
  let array = numeros;
  let maiorValor = 0;
  for (let index in numeros){
    if (numeros[index] > maiorValor){
      maiorValor = numeros[index];
    };
  };
  return numeros.indexOf(maiorValor);
};

// console.log(maiorValor([999, 1001, 1002]));

// EXERCICIO 3:
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(numeros){
  let menorValor = numeros[0];
  for (index in numeros){
    if (numeros[index] < menorValor){
      menorValor = numeros[index];
    };
  }
  return numeros.indexOf(menorValor);
};

console.log(menorValor([1, 6, 90, 3, -1, -99]))