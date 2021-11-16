const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT

const app = express();

app.use(express.json());

app.use("/products", require("./controllers/productController"));

app.listen(PORT, () => console.log("listening ", PORT));
