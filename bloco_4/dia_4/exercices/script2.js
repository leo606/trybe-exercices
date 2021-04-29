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

function maiorValor(numeros) {
  let array = numeros;
  let maiorValor = 0;
  for (let index in numeros) {
    if (numeros[index] > maiorValor) {
      maiorValor = numeros[index];
    };
  };
  return numeros.indexOf(maiorValor);
};
// console.log(maiorValor([999, 1001, 1002]));

// EXERCICIO 3:
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(numeros) {
  let menorValor = numeros[0];
  for (index in numeros) {
    if (numeros[index] < menorValor) {
      menorValor = numeros[index];
    };
  }
  return numeros.indexOf(menorValor);
};
// console.log(menorValor([1, 6, 90, 3, -1, -99]))

// EXERCICIO 4:
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function longestName(nomes) {
  let longName = '';
  for (let index in nomes) {
    if (nomes[index].length > longName.length) {
      longName = nomes[index];
    };
  };
  return longName;
};
// console.log(longestName(['Joaaaaaaaaaaaaaasé', 'Lucasssssss', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// EXERCICIO 5:
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(numbers) {
  let mostRepeatedNumber = 0;
  let repeats = 0;
  let numberRepeat = 0;
  for (let index in numbers) {
    for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
      if (numbers[index] === numbers[indexNumber]) {
        numberRepeat += 1;
      };
    };
    if (numberRepeat >= repeats) {
      mostRepeatedNumber = numbers[index];
      repeats = numberRepeat;
    }
    numberRepeat = 0;
  };
  return mostRepeatedNumber;
}
// console.log(mostRepeated([2, 3, 2, 5, 8, 8, 8, 8, 2, 3]));

// EXERCICIO 6:
// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function summation(n) {
  let sum = 0;
  for (let index = 0; index <= n; index += 1){
    sum += index;
  };
  return sum;
};
// console.log(summation());

// EXERCICIO 7:
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function checkWordEnding (word, end) {
  let wordBeginning = '';
  let wordEnd = '';
  for (let index = 0; index < (word.length - end.length); index += 1){
    wordBeginning += word[index];
  };
  
  


  return ;
};
console.log(checkWordEnding('trybe', 'be'));