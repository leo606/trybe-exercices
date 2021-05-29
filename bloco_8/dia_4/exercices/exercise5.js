// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names
    .reduce((acc, curr) => acc + curr)
    .split("")
    .reduce(
      (acc, curr) => (curr === "a" || curr === "A" ? (acc += 1) : acc),
      0
    );
}

console.log(containsA());

assert.deepStrictEqual(containsA(), 20);
