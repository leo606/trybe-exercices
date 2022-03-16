// Exercício 3 O código abaixo está em JavaScript.
// Calcule sua ordem de complexidade para um array de tamanho n.

// ordem de complexidade: O(n)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.map((n) => n * n);

// Exercício 4 O código abaixo está em JavaScript.
// Calcule sua ordem de complexidade para um array de tamanho n.

// ordem de complexidade: O(3n)

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2
  .map((n) => n * n)
  .filter((n) => n % 2 === 0)
  .reduce((acc, n) => acc + n);
