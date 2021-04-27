function verificarPalindromo(word) {
  let inputWord = word;
  let invertedWord = '';
  for (let index = (inputWord.length - 1); index >= 0; index -= 1) {
    invertedWord = invertedWord + inputWord[index];
  };
  if (invertedWord == inputWord){
    return true;
  }else{
    return false;
  };
};

console.log(verificarPalindromo('lel'));
