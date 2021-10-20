const fs = require("fs").promises;

async function printSimpsons() {
  try {
    const characters = await fs.readFile("./simpsons.json", "utf-8");
    const charactersParse = JSON.parse(characters);
    for (let c of charactersParse) {
      console.log(`${c.id} - ${c.name}`);
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function printSimpsonsById(inId) {
  try {
    const characters = await fs.readFile("./simpsons.json", "utf-8");
    const charactersParse = JSON.parse(characters);
    const chaIndex = charactersParse.findIndex(({ id }) => id == inId);
    if (chaIndex >= 0) {
      return console.log(
        `${charactersParse[chaIndex].id} - ${charactersParse[chaIndex].name}`
      );
    }
    throw new Error("id não encontrado");
  } catch (e) {
    console.log(e.message);
  }
}

async function removeSimpsons() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((data) => JSON.parse(data));

  const charactersRemoved = characters.filter((c)=> c.id !== '10' && c.id !== '6');

  fs.writeFile("./simpsons.json", JSON.stringify(charactersRemoved, 2))
    .then(() => console.log("removido com sucesso"))
    .catch((e) => console.log(e.message));
}

removeSimpsons();
