let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCICIO 1:
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index += 1){
    // console.log(numbers[index]);
}

// EXERCICIO 2:
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1){
    soma = soma + numbers[index2];
}
console.log(`A soma é ${soma}`);

// EXERCICIO 3:
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = soma / numbers.length;
console.log(`A média aritmética é ${mediaAritmetica}`);

// EXERCICIO 4:
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}

// EXERCICIO 5:
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;
for (let index3 = 0; index3 < numbers.length; index3 += 1){
    if (numbers[index3] > maiorNumero){
        maiorNumero = numbers[index3];
    }
}
console.log(`O maior número é ${maiorNumero}`);

// EXERCICIO 6:
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0;
for (let index4 = 0; index4 < numbers.length; index4 += 1){
    if (numbers[index4] % 2 != 0){
        numerosImpares = numerosImpares += 1;
    }
}
console.log(`A quantidade de ímpares é ${numerosImpares}`)

// EXERCICIO 7:
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
