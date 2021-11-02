const connection = require("./connection");
const { getAllAuthorsIds } = require("./Author");

async function getAll() {
  const [books] = await connection.execute("SELECT * FROM books;");
  return books;
}

async function getByAuthorId(id) {
  const [books] = await connection.execute(
    `SELECT * FROM books WHERE author_id = ${id}`
  );
  if (!books.length) return null;
  return books;
}

async function getByBookId(id) {
  const [books] = await connection.execute("SELECT * FROM books WHERE id=?", [
    id,
  ]);
  if (!books.length) return null;
  return books;
}

async function validBook(title, authorId) {
  const ids = await getAllAuthorsIds();
  if (!title || typeof title !== "string" || title.length < 3) return false;
  if (
    !authorId ||
    typeof authorId !== "number" ||
    !ids.some((id) => id === authorId)
  )
    return false;
  return true;
}

async function createBook(title, authorId) {
  await connection.execute(
    "INSERT INTO books (title, author_id) VALUES (?, ?)",
    [title, authorId]
  );
}

module.exports = { getAll, getByAuthorId, getByBookId, validBook, createBook };
