const longestWord = (string) => {
  const splited = string.split(' ');
  let longest = '';
  let long = 0;
  for (let index = 0; index < splited.length; index += 1) {
    if (splited[index].length > long) {
      longest = splited[index];
      long = splited[index].length;
    }
  }
  return longest
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));