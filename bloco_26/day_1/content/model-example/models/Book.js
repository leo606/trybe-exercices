const connection = require("./connection");
const { getAllAuthorsIds } = require("./Author");
const { ObjectId } = require("mongodb");

async function getAll() {
  try {
    const db = await connection();
    const books = await db.collection("books").find().toArray();
    return books;
  } catch (error) {
    console.log(error);
  }
}

async function getByAuthorId(id) {
  try {
    const db = await connection();

    const books = await db
      .collection("books")
      .find({ author_id: id })
      .toArray();

    if (!books.length) return null;

    return books;
  } catch (e) {
    console.log(e);
  }
}

async function getByBookId(id) {
  if (!ObjectId.isValid(id)) return null;

  try {
    const db = await connection();
    const book = await db.collection("books").findOne(new ObjectId(id));
    if (!book) return null;
    return book;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const db = await connection();
    const inserted = await db
      .collection("books")
      .insertOne({ title, authorId });
    return { saved: { id: inserted.insertedId, title, authorId } };
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, getByAuthorId, getByBookId, validBook, createBook };
