const fatorial = (num) => {
  let fatorialResult = num;
  for (let index = num; index >= 1; index -= 1) {
    if (index === 1) {
      fatorialResult = fatorialResult * (index);
    } else {
      fatorialResult = fatorialResult * (index - 1);
    }
  }
  return fatorialResult
}
console.log(fatorial(6));

// ------RECURSIVO DO SITE https://backefront.com.br/como-fazer-fatorial-recursivo-javascript/------

// const fatorial = (numero) => {
//   if (numero < 0) {
//     return false;
//   }
//   return numero === 0 ? 1 : numero * fatorial(numero - 1);
// };

// console.log(fatorial(5));
// Resultado esperado: 120


