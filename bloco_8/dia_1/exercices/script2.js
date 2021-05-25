function checkBet(bet, star) {
  return (bet === star);
}

function prize(bet, check) {
  const star = Math.ceil(Math.random() * 5);
  if (check(bet, star)) return `Parabéns você ganhou!`;
  return 'Tente Novamente'
}

console.log(prize(3, checkBet));