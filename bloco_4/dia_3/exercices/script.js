// EXERCICIO 1:
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// ---ALGORITIMO---
// criar variavel n
// criar condicao para executar se n > 1
// criar variavel string para adicionar asteriscos
// criar loop para adicionar um asterisco com a condicao de quantidade de n
// criar loop para dar output com a variavel de string quantas veses for n

let n = 6;
let outputStars = '';

if (n > 0){
    for (let index = 0; index < n; index += 1){
        outputStars += '*';
    }
    for (let index = 0; index < n; index += 1){
        console.log(outputStars);
    }
}else {
    console.log('valor menor ou igual a 0');
}
