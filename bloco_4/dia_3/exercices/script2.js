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

let size = 5;
let symbol = '*';
let outputLine = '';

for (let index = 0; index < size; index += 1){
  outputLine = outputLine + symbol;
  console.log(outputLine);
};