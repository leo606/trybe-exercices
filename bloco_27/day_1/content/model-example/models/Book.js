const connection = require("./connection");

async function getAll() {
  const [books] = await connection.execute("SELECT * FROM books;");
  return books;
}

async function getByAuthorId(id) {
  const [books] = await connection.execute(
    `SELECT * FROM books WHERE author_id = ${id}`
  );
  return books;
}

module.exports = { getAll, getByAuthorId };
