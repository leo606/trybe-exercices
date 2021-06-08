const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }

  resolve(number);
})
  .then((number) => `Que sucesso =) nosso número foi ${number}`)
  .then((msg) => console.log(msg))
  .catch((numero)=> console.log(`Que fracasso =( o número foi ${numero}`))
