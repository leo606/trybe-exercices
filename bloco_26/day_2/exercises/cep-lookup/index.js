const express = require("express");
const app = express();
const PORT = 3000;

const pingController = require("./controller/pingController");
const cepController = require("./controller/cepController");

app.use(express.json());

app.get("/ping", pingController);

app.get("/cep", cepController);

app.listen(PORT, console.log("listening port", PORT));
