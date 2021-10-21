const fs = require("fs");

function leArquivo(fileName) {
  try {
    const content = fs.readFileSync(fileName, 'utf8');
    return content;
  } catch (e) {
    return null;
  }
}

module.exports = leArquivo;
