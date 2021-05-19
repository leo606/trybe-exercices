const fatorial = (num) => {
  let fatorialResult = num;
  for (let index = num; index >= 1; index -= 1) {
    if (index === 1) {
      fatorialResult = fatorialResult * (index);
    } else {
      fatorialResult = fatorialResult * (index - 1);
    }
  }
  return fatorialResult
}
console.log(fatorial(4));