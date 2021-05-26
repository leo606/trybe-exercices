const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find(element => element % 3 === 0 && element % 5 === 0);
}

console.log(findDivisibleBy3And5())

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find(element => element.length === 5);
}

console.log(findNameWithFiveLetters());