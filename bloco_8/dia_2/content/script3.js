const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(element => element === name);
}

// console.log(hasName(names, 'Bruna'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every(element => element.age >= minimumAge);
}

console.log(verifyAges(people, 16));

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

let people2Sorted = people2.sort((a, b) => {
  if (a.age > b.age) return 1
  if (a.age < b.age) return -1
});

console.log(people2Sorted);