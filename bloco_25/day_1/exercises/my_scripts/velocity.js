const rl = require('readline-sync');

const dist = rl.questionInt('Distance(m) ');
const time = rl.questionInt('Time(sec) ');

console.log(`velocity: ${dist / time}m/s`);
