function checkNumber(n){
  if(n > 0) return "positivo";
  if(n < 0) return "negativo";
  return "neutro";
}

module.exports = checkNumber;