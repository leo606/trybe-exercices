let firstNumber = Math.ceil((Math.random() * 60));
let secondtNumber = Math.ceil((Math.random() * 60));
let thirdNumber = Math.ceil((Math.random() * 60));
let fourthNumber = Math.ceil((Math.random() * 60));
let fifthNumber = Math.ceil((Math.random() * 60));
let sixthNumber = Math.ceil((Math.random() * 60));

let megaSenaNumbers = [fifthNumber, secondtNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];
let playerNumbers1 = [1, 2, 3, 4, 5, 6];
let playerNumbers2 = [7, 8, 9, 10, 11, 12];
let playerNumbers3 = [11, 21, 31, 41, 51, 16];
let playerNumbers = [playerNumbers1, playerNumbers2, playerNumbers3];
let numbersHits = 0;

for (let games = 0; games < playerNumbers.length; games += 1){
    for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
        for (let indexGame = 0; indexGame < playerNumbers[games].length; indexGame += 1){
            if (playerNumbers[games] == megaSenaNumbers[indexMega]){
                numbersHits += 1;
            }
        }
    }
    console.log(`jogada ${games + 1}`);
    console.log(`mega sena ${megaSenaNumbers}`);
    console.log(`jogo ${playerNumbers[games]}`);
    console.log(`acertos ${numbersHits}`)
}