const rl = require("readline-sync");
let stop = false;

while (!stop) {
  const random = Math.ceil(Math.random() * 10);
  const bet = rl.questionInt("Number between 1 and 10 ");

  if (bet === random) {
    console.log("Parabéns, número correto!");
    console.log("");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${random}`);
    console.log("");
  }

  if (rl.keyInYN('stop?')) {
    stop = true;
  }
}
