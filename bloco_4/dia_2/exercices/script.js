let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCICIO 1:
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// ---ALGORITIMO---
// criar array
// criar condicao de percorrer o array
// criar output para cada identação

for (let index = 0; index < numbers.length; index += 1){
    // console.log(numbers[index]);
}

// EXERCICIO 2:
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// ---ALGORITIMO---
// criar Array
// criar variavel para armazenar a soma
// criar condicao para percorrer o array adicionando cada valor a variavel soma
// output da soma

let soma = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1){
    soma = soma + numbers[index2];
}
console.log(`A soma é ${soma}`);

// EXERCICIO 3:
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// ---ALGORITIMO---
// criar array
// criar variavel soma
// criar condicao para percorrer o array
// a cada loop da condicao somar em soma
// dividiar a soma pela quantidade de valores
// output do resultado

let mediaAritmetica = soma / numbers.length;
console.log(`A média aritmética é ${mediaAritmetica}`);

// EXERCICIO 4:
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// ---ALGORITIMO---
// usar resultado do ex anterior como valor da condicao
// criar condicao para verificar se o valor que 20


if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}

// EXERCICIO 5:
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
---ALGORITIMO---
criar array
criar variavel para armazenar o maior numero
criar condicao para percorrer o array e verifivar se cada valor é maior que o maior numero
se for maior substituir o valor da variavel de maior numero pelo maior numeoro encontrado
al termino da condicao de percorrer, imprimir a variavel maior numero

let maiorValor = 0;
for (let index3 = 0; index3 < numbers.length; index3 += 1){
    if (numbers[index3] > maiorValor){
        maiorValor = numbers[index3];
    }
}
console.log(`O maior número é ${maiorValor}`);

// EXERCICIO 6:
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0;
for (let index4 = 0; index4 < numbers.length; index4 += 1){
    if (numbers[index4] % 2 != 0){
        numerosImpares = numerosImpares += 1;
    }
}
console.log(`A quantidade de ímpares é ${numerosImpares}`);

// EXERCICIO 7:
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorValor = maiorValor;
for (let index5 = 0; index5 < numbers.length; index5 += 1){
    if (numbers[index5] < menorValor) {
        menorValor = numbers[index5];
    }
}
console.log(`O menor valor é ${menorValor}`);
