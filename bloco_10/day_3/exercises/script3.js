const { default: fetch } = require('node-fetch');

const fetchDog = async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json();
    return obj;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchDog };
