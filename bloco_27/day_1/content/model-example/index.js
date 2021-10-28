const express = require("express");

const Author = require("./models/Author");
const Books = require("./models/Book");

const app = express();

app.get("/authors", async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get("/books", async (req, res) => {
  const { author_id } = req.query;
  if (author_id) {
    const books = await Books.getByAuthorId(+author_id);
    return res.status(200).json(books);
  }
  const books = await Books.getAll();
  return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
