function checkNumber(n) {
  if (typeof n !== "number") return "o valor deve ser um número";
  if (n > 0) return "positivo";
  if (n < 0) return "negativo";
  return "neutro";
}

module.exports = checkNumber;
