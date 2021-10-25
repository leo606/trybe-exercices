const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const { getSimpsons, writeSimpson } = require("./simpsons");

const app = express();
app.use(bodyParser.json());

app.route("/users/:name/:age").put((req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `your name is ${name}, you are ${age} years old` });
});

app.route("/simpsons/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const simpsonsData = await getSimpsons();
    const character = simpsonsData.find(({ id: chaId }) => id === chaId);
    if (character) return res.status(200).json(character);
    return res.status(404).json({ message: "not found" });
  } catch (e) {
    res.status(401).json({ message: "internal server error" });
  }
});

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

app
  .route("/simpsons")
  .get(async (_req, res) => {
    try {
      const simpsons = await getSimpsons();
      res.status(200).json(simpsons);
    } catch (e) {
      res.status(401).json({ message: "internal server error" });
    }
  })
  .post(async (req, res) => {
    try {
      const { id, name } = req.body;
      const simpsons = await getSimpsons();
      if (simpsons.some((cha) => cha.id === id))
        return res.status(409).json({ message: "id already exists" });
      writeSimpson(JSON.stringify([...simpsons, { id, name }], null, 2));
      res.status(204).end();
    } catch (e) {
      res.status(401).json({ message: "internal server error" });
    }
  });

app.listen(3001, () => console.log("listening on port 3001"));
