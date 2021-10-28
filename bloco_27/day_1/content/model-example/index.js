const express = require("express");

const Author = require("./models/Author");
const Books = require("./models/Book");

const app = express();
app.use(express.json());

app.get("/authors", async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.post("/authors", async (req, res) => {
  const obj = ({ first_name, middle_name, last_name } = req.body);
  if (!Author.validAuthor(...Object.values(obj))) {
    return res.status(400).json({ message: "invalid data" });
  }
  await Author.createAuthor(...Object.values(obj));
  res.status(201).json({ message: "author saved" });
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  console.log("params", id);
  const books = await Books.getByBookId(+id);
  if (!books) return res.status(404).json({ message: "not found" });
  return res.status(200).json(books);
});

app.get("/books", async (req, res) => {
  const { author_id } = req.query;
  if (author_id) {
    const books = await Books.getByAuthorId(+author_id);
    if (!books) return res.status(404).json({ message: "not found" });
    return res.status(200).json(books);
  }
  const books = await Books.getAll();
  return res.status(200).json(books);
});

app.post("/books", async (req, res) => {
  const obj = ({ title, author_id } = req.body);
  const isValid = await Books.validBook(...Object.values(obj));
  if (!isValid) {
    return res.status(400).json({ message: "invalid data" });
  }
  await Books.createBook(...Object.values(obj));

  return res.status(201).json({ message: "book saved" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
