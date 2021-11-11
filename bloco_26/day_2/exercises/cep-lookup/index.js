const express = require("express");
const app = express();
const PORT = 3000;

const ping = require("./service/ping");
const cep = require("./service/cep");

app.use(express.json());

app.get("/ping", ping.pingRes);

app.get("/cep", cep.cep);

app.listen(PORT, console.log("listening port", PORT));
