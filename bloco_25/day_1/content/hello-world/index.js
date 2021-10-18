const rl = require('readline-sync');

const name = rl.question("What's your name? ");
const age = rl.question("What's your age? ");

console.log(`Hello World! Your name is ${name}, and you are ${age} years old!`);
