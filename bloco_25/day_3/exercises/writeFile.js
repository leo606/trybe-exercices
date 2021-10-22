const fs = require("fs").promises;

async function writeFile(name, content) {
  try {
    if (typeof name !== "string" || typeof content !== "string")
      throw new Error("type must be a string");
    await fs.writeFile(name, content);
    return "ok";
  } catch (e) {
    return e.message;
  }
}

writeFile("23", 23);

module.exports = writeFile;
