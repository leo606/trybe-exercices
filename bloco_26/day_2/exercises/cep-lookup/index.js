const express = require("express");
const app = express();
const PORT = 3000;

const pingController = require("./controller/pingController");
const cepController = require("./controller/cepController");

const errorMiddleware = require("./middlewares/error");

app.use(express.json());

app.use("/ping", pingController);
app.use("/cep", cepController);

app.use(errorMiddleware);

app.listen(PORT, console.log("listening port", PORT));
