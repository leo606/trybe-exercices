// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const numbersArray = [];
  for (let index = 0; index < 10; index += 1) {
    numbersArray.push(Math.ceil(Math.random() * 50) ** 2);
  }
  const soma = numbersArray.reduce((acc, curr) => acc + curr);
  if (soma < 8000) {
    return 'sucesso';
  } else {
    throw new Error('erro');
  }
};

function appendJoke(joke) {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

window.onload = () =>
  fetchJoke()
    .then((soma) => {
      console.log(soma);
      return soma;
    })
    .then((soma) => console.log(soma))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
