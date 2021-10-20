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

  const charactersRemoved = characters.filter(
    (c) => c.id !== "10" && c.id !== "6"
  );

  fs.writeFile("./simpsons.json", JSON.stringify(charactersRemoved, 2))
    .then(() => console.log("removido com sucesso"))
    .catch((e) => console.log(e.message));
}

async function simpsonFamily() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((e) => console.log(e.message));

  const filteredData = characters.filter(
    ({ id }) => id == 1 || id == 2 || id == 3 || id == 4
  );

  fs.writeFile("./simpsonFamily.json", JSON.stringify(filteredData))
    .then(() => console.log("arquivo criado com sucesso"))
    .catch((e) => console.log(e.message));
}

async function addNelson() {
  const family = await fs
    .readFile("./simpsonFamily.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((e) => console.log(e.message));

  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((e) => console.log(e.message));

  const nelson = characters.findIndex((c)=> c.name === "Nelson Muntz")
  family.push(characters[nelson]);

  fs.writeFile("./simpsonFamily.json", JSON.stringify(family))
    .then(() => console.log("arquivo criado com sucesso -- add nelson"))
    .catch((e) => console.log(e.message));
}
addNelson();
