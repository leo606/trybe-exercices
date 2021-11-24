const express = require("express");
require("dotenv").config();

const errorMiddleware = require("./middlewares/error");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/products", require("./controllers/productController"));

app.use(errorMiddleware);

app.listen(PORT, () => console.log("listening ", PORT));
