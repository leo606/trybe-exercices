const express = require("express");
const app = express();
const PORT = 3000;
const ping = require("./service/ping");

app.use(express.json());

app.get("/ping", ping.pingRes);

app.listen(PORT, console.log("listening port", PORT));
