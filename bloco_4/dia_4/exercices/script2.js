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

console.log(maiorValor([999, 1001, 1002]));

// let numeros = [33, 91, 90, 85];
// let maiorValor = 0;

// for (let index in numeros) {
//   if (numeros[index] > maiorValor) {
//     maiorValor = numeros[index];
//   };
// };
// console.log(maiorValor);