const saudacoes = ["Olá, tudo bem?", (saudacao) => console.log(saudacao)];

const [msg, printMsg] = saudacoes;

// printMsg(msg);

let comida = "gato";
let animal = "água";
let bebida = "arroz";

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,,...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
