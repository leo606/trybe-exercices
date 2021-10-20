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

printSimpsons();
