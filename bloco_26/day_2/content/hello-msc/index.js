const express = require("express");
// const bodyParser = require("body-parser");

const Author = require("./controllers/Author");

const app = express();

app.use(express.json());

app.get("/authors", Author.getAll);
app.get("/authors/:id", Author.findById);
app.post("/authors", Author.create);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
