const connection = require("./connection");
const { ObjectId } = require("mongodb");

function newAuthor({ id, firstName, middleName, lastName }) {
  const fullName = [firstName, middleName, lastName].filter((n) => n).join(" ");

  return { id, name: fullName, firstName, middleName, lastName };
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
    return authors.map(({ _id, firstName, middleName, lastName }) =>
      newAuthor({
        id: _id,
        firstName,
        middleName,
        lastName,
      })
    );
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

async function createAuthor(firstName, middleName, lastName) {
  try {
    const db = await connection();
    const insert = await db
      .collection("authors")
      .insertOne({ firstName, middleName, lastName });
    return newAuthor({
      id: insert.insertedId,
      firstName,
      middleName,
      lastName,
    });
  } catch (error) {
    console.log(error);
  }
}

async function findByid(id) {
  if (!ObjectId.isValid(id)) return null;

  try {
    const db = await connection();
    const author = await db.collection("authors").findOne(new ObjectId(id));
    if (!author) return null;
    const { _id, firstName, middleName, lastName } = author;
    return newAuthor({ id: _id, firstName, middleName, lastName });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll,
  validAuthor,
  createAuthor,
  getAllAuthorsIds,
  findByid,
};
