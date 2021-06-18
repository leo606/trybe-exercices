function randomNumber() {
  return Math.ceil(Math.random() * 100);
}

console.log(randomNumber());

module.exports = { randomNumber };
