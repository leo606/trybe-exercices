const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const { checkNameValid, authMiddleware } = require("./utils/auth");

const app = express();
app.use(bodyParser.json());

app.get("/open", (_req, res) => res.send("open"));

app.use(authMiddleware);

const foods = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 40.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/hello", handleHelloWorldRequest);

app
  .route("/drinks")
  .get((req, res) => {
    res.json(
      drinks.sort((d, e) => {
        if (d.name > e.name) return 1;
        if (d.name < e.name) return -1;
        return 0;
      })
    );
  })
  .post((req, res) => {
    const { id, name, price } = req.body;
    drinks.push({ id, name, price });
    res.status(201).json({ message: "drink saved" });
  });

app.route("/drinks/search").get((req, res) => {
  const { name } = req.query;
  const drinkByName = drinks.filter((d) => d.name.includes(name));
  if (!drinkByName.length)
    return res.status(404).json({ message: "not found" });
  return res.status(200).json(drinkByName);
});

app
  .route("/drinks/:id")
  .get((req, res) => {
    const { id } = req.params;
    const drinkById = drinks.find(({ id: drinkId }) => drinkId === +id);

    if (!drinkById) return res.status(404).json({ message: "drink not found" });

    return res.status(200).json(drinkById);
  })
  .put(checkNameValid, (req, res) => {
    const { id } = req.params;
    console.log(id);
    const { name, price } = req.body;
    const drinkIndex = drinks.findIndex((f) => f.id === +id);

    if (drinkIndex === -1)
      return res.status(404).json({ message: "drink not found iiii" });

    drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };
    res.status(204).end();
  })
  .delete((req, res) => {
    const { id } = req.params;
    const drinkIndex = drinks.findIndex((d) => d.id === +id);
    if (drinkIndex === -1)
      return res.status(404).json({ message: "not found" });
    drinks.splice(drinkIndex, 1);
    res.status(204).end();
  });

app.route("/foods/search").get((req, res) => {
  const { name, minPrice } = req.query;
  const foodByName = foods.filter(
    (food) => food.name.includes(name) && food.price >= +minPrice
  );
  if (!foodByName.length) return res.status(404).json({ message: "not found" });
  return res.status(200).json(foodByName);
});

app
  .route("/foods")
  .get((_req, res) => {
    res.json(foods);
  })
  .post(checkNameValid, (req, res) => {
    const { id, name, price, waitTime } = req.body;
    foods.push({ id, name, price, waitTime });
    console.log(foods);
    return res.status(201).json({ message: "recipe created" });
  });

app.all("*", (req, res) => {
  return res.status(404).json({ message: `route ${req.path} not found` });
});

app.listen(3001, () => {
  console.log("ouvindo na porta 3001");
});

function handleHelloWorldRequest(_req, res) {
  res.status(200).send("Hello World!");
}
