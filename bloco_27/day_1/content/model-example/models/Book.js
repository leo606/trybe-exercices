const connection = require("./connection");

async function getAll() {
  const [books] = await connection.execute("SELECT * FROM books;");
  return books;
}

module.exports = { getAll };
