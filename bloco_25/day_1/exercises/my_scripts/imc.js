const rl = require('readline-sync');

const weight = rl.questionFloat('Weight ');
const height = rl.questionFloat('Height ');

const imc = (weight * height) / 2;

if (imc < 18.5) {
  console.log(`imc: ${imc}, situacao: Abaixo do peso (magreza)`)
} else if (imc >= 18.5 && imc < 25) {
  console.log(`imc: ${imc}, situacao: Peso normal`)
} else if (imc >= 25 && imc < 30) {
  console.log(`imc: ${imc}, situacao: Acima do peso (sobrepeso)`)
} else if (imc >= 30 && imc < 35) {
  console.log(`imc: ${imc}, situacao: Obesidade grau I`)
} else if (imc >= 35 && imc < 40) {
  console.log(`imc: ${imc}, situacao: Obesidade grau II`)
} else {
  console.log(`imc: ${imc}, situacao: Obesidade graus III e IV`)
}