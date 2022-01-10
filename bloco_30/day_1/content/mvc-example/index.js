const express = require("express");

const authorController = require("./controllers/authorController");

const app = express();

app.use(express.json());

app.get("/authors", authorController.listAuthors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
