const skills = ['HTML', 'CSS', 'JavaScript', 'Linux', 'Lógica'];

const findX = (parametro, string) => {
  let sentence = '';
  for (let index of string) {
    if (index === 'x') {
      sentence += `${index = parametro}`;
    } else {
      sentence += index;
    }
  }
  return sentence
}

const concat = (string) => {
  const sorted = skills.sort();
  
  let output = `${string}
-
Minhas skills:`;


  sorted.forEach((skill) => output = `${output}
-${skill}`);

  return output
}
console.log(concat(findX('Leo', 'Tryber x aqui!')));