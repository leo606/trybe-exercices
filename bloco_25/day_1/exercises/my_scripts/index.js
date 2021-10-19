const rl = require("readline-sync");

const options = ["IMC", "Velocity", "Prize"];

console.table(options);

const choice = rl.keyIn("Press the key", { limit: "$<0-2>" });
console.log(choice);

if (choice == 0) {
  require("./imc");
} else if (choice == 1) {
  require("./velocity");
} else {
  require("./prize");
}
