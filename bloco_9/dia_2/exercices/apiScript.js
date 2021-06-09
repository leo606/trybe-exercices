// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return new Promise((resolve, reject) => {
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
      resolve([soma / 2, soma / 3, soma / 5, soma / 10]);
    } else {
      reject();
    }
  });
};

function appendJoke(joke) {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

window.onload = () =>
  fetchJoke()
    .then((soma) => {console.log(soma); return soma})
    .then((soma)=> console.log(soma))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
