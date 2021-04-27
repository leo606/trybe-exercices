let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthtNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthtNumber];
let player1Game = [44, 56, 60, 23, 18, 45];
let player2Game = [45, 54, 59, 24, 20, 40];
let player3Game = [39, 51, 47, 25, 4, 54];
let playerGame = [player1Game, player2Game, player3Game];

for (let indexGames = 0; indexGames < playerGame.length; indexGames += 1) {
  let numberOfHits = 0;
  for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexGame = 0; indexGame < playerGame[indexGames].length; indexGame += 1) {
      if (playerGame[indexGames][indexGame] === megaSenaNumbers[indexMega]) {
        numberOfHits += 1;
      };
    };
  };
  console.log(`MEGASENA      ${megaSenaNumbers}`);
  console.log(`PLAYER GAME   ${playerGame[indexGames]}`);
  console.log(`ACERTOS       ${numberOfHits}`);
  console.log('----------------------------------------------')
};

// numeros aleatorios dentro de um intervalo - random * (max - min ) + min

