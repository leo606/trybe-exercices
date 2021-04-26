// EXERCICIO 1:
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// ---ALGORITIMO---
// criar variavel n
// criar condicao para executar se n > 1
// criar variavel string para adicionar asteriscos
// criar loop para adicionar um asterisco com a condicao de quantidade de n
// criar loop para dar output com a variavel de string quantas veses for n


// if (n > 0) {
//   for (let index = 0; index < n; index += 1) {
//     outputStars += '*';
//   };
//   for (let index = 0; index < n; index += 1) {
//     console.log(outputStars);
//   };
// } else {
//   console.log('valor menor ou igual a 0');
// };
// console.log('-------------------------------------------')
// outputStars = '';

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// ---ALGORITIMO1---
// usar variavel n
// criar condicao para verificar se n maior q 0
// criar loop para adicionar * a variavel output
// criar loop para imprimir output subtraindo * com relacao ao valor de legth -1

// ---ALGORITIMO1---
// usar variavel n
// criar condicao para verificar se n maior q 0
// criar loop para imprimir com o valor da quantidade de n - (n - index)

let n = 6;
let outputStars = '';
let symbol = '*';

for (let index = 0; index < n; index +=1){
  outputStars = outputStars + symbol;
  console.log(outputStars);
};
