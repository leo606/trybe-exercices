const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.route("/ping").get((req, res) => {
  res.status(200).json({ message: "pong" });
});

app.listen(3001, () => console.log("listening on port 3001"));
