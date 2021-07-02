const END_POINT = 'https://dog.ceo/api/breeds/image/random';

async function fetchDog() {
  try {
    const responseFetch = await fetch(END_POINT);
    const dogObj = await responseFetch.json();
    return dogObj.message;
  } catch (err) {
    console.log(`Erro no ${END_POINT} - `, err);
  }
}

export default fetchDog;
