let firstNumber = Math.ceil((Math.random() * 60));
let secondtNumber = Math.ceil((Math.random() * 60));
let thirdNumber = Math.ceil((Math.random() * 60));
let fourthNumber = Math.ceil((Math.random() * 60));
let fifthNumber = Math.ceil((Math.random() * 60));
let sixthNumber = Math.ceil((Math.random() * 60));

let megaSenaNumbers = [fifthNumber, secondtNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];
let playerNumbers = [12, 44, 8, 63, 9, 53];
let numbersHits = 0;

for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
    for (let indexGame = 0; indexGame < playerNumbers.length; indexGame += 1){
        if (playerNumbers[indexGame] == megaSenaNumbers[indexMega]){
            numbersHits += 1;
        }
    }
}


console.log(numbersHits)
console.log(`sorteio ${megaSenaNumbers}`)
console.log(`jogo    ${playerNumbers}`)