function checkeAnswers(gab, answers) {
  let pointCount = { grade: 0, right: 0, };
  for (let index = 0; index < gab.length; index += 1) {
    if (answers[index] !== 'N.A') {
      if (gab[index] === answers[index]) {
        pointCount.grade += 1;
        pointCount.right += 1;
      } else {
        pointCount.grade -= 0.5;
      }
    }
  }
  return pointCount;
}

function rightAnswer(gab, answers, callback) {
  let checked = callback(gab, answers);
  return `A sua nota foi ${checked.grade} com ${checked.right} respostas corretas.`
}

const gabArray = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(rightAnswer(gabArray, studentAnswers, checkeAnswers));