const fs = require("fs").promises;

async function getSimpsons() {
  const data = await fs.readFile("./simpsons.json", "utf-8");
  return JSON.parse(data);
}

module.exports = { getSimpsons };
