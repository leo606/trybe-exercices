const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.route("/ping").get((req, res) => {
  res.status(200).json({ message: "pong" });
});

app.route("/hello").post((req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello ${name}` });
});

app.route("/greetings").post((req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: "Unauthorized" });
  return res.status(200).json({ message: `Hello ${name}!` });
});

app.listen(3001, () => console.log("listening on port 3001"));
