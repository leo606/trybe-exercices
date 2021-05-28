const collection = [1, 2, 3, 4, 5];

const getSum = (acc, curr) => {
  console.log(`acc = ${acc} / curr = ${curr}`);
  return acc + curr;
};

// const sumNumbers = collection.reduce(getSum);
// console.log(`sumNumbers = ${sumNumbers}`);

// const numbers = [99, 87, -30, 3, 89];

const getHigher = (higher, number) => (number > higher ? number : higher);

// console.log(numbers.reduce(getHigher));

const numbers = [1, 19, 23, 53, 4, 5, 76, 23, 54];

// const numbersEven = numbers.filter((element) => element % 2 === 0);
// console.log(numbersEven.reduce((acc, curr) => acc + curr)); == 152

const numbersEvenSum = numbers.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);

// console.log(numbersEvenSum);