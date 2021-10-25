const express = require("express");
const fs = require("fs").promises;

const app = express();

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

app.route("/drinks").get((req, res) => {
  res.json(
    drinks.sort((d, e) => {
      if (d.name > e.name) return 1;
      if (d.name < e.name) return -1;
      return 0;
    })
  );
});

app.route("/drinks/search").get((req, res) => {
  const { name } = req.query;
  const drinkByName = drinks.filter((d) => d.name.includes(name));
  if (!drinkByName.length)
    return res.status(404).json({ message: "not found" });
  return res.status(200).json(drinkByName);
});

app.route("/drinks/:id").get((req, res) => {
  const { id } = req.params;
  const drinkById = drinks.find(({ id: drinkId }) => drinkId === +id);

  if (!drinkById) return res.status(404).json({ message: "drink not found" });

  return res.status(200).json(drinkById);
});

app.route("/foods/search").get((req, res) => {
  const { name, minPrice } = req.query;
  const foodByName = foods.filter(
    (food) => food.name.includes(name) && food.price >= +minPrice
  );
  if (!foodByName.length) return res.status(404).json({ message: "not found" });
  return res.status(200).json(foodByName);
});

app.route("/foods").get((_req, res) => {
  res.json(foods);
});

app.listen(3001, () => {
  console.log("ouvindo na porta 3001");
});

function handleHelloWorldRequest(_req, res) {
  res.status(200).send("Hello World!");
}
