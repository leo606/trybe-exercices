const fs = require("fs").promises;

async function getSimpsons() {
  const data = await fs.readFile("./simpsons.json", "utf-8");
  return JSON.parse(data);
}

async function writeSimpson(payload) {
  fs.writeFile("./simpsons.json", payload);
}

module.exports = { getSimpsons, writeSimpson };
