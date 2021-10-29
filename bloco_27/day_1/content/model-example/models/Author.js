const connection = require("./connection");

function addFullNameField(author) {
  const fullName = [author.firstName, author.middleName, author.lastName]
    .filter((n) => n)
    .join(" ");

  return { ...author, fullName };
}

function serialize(author) {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  };
}

async function getAll() {
  try {
    const db = await connection();
    const authors = await db.collection("authors").find().toArray();
    return authors.map((a) => addFullNameField(a));
  } catch (error) {
    console.log(error);
  }
}

async function getAllAuthorsIds() {
  const [authors] = await connection.execute(
    "SELECT id FROM model_example.authors;"
  );
  return authors.map((a) => a.id);
}

function validAuthor(first_name, middle_name, last_name) {
  if (!first_name || typeof first_name !== "string") return false;
  if (!middle_name || typeof middle_name !== "string") return false;
  if (!last_name || typeof last_name !== "string") return false;
  return true;
}

function createAuthor(first_name, middle_name, last_name) {
  return connection.execute(
    "INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)",
    [first_name, middle_name, last_name]
  );
}

module.exports = { getAll, validAuthor, createAuthor, getAllAuthorsIds };
