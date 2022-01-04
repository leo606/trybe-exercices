const express = require("express");
const plantsModule = require("./plants");

const app = express();

app.use(express.json());

app
  .route("/plant/:id")
  .get((res, res) => {
    const { id } = req.params;
    const plant = plantsModule.getPlantById(id);
    res.status(200).json(plant);
  })
  .put((res, res) => {
    const { id } = req.params;
    const { plant } = req.body;
    plantsModule.editPlant(id, plant);
    res.status(201).end();
  })
  .delete((res, res) => {
    const { id } = req.params;
    res.status(200).end();
  });

app
  .route("/plant")
  .get((_req, res) => {
    res.status(200).json(plantsModule.getPlants());
  })
  .post((req, res) => {
    const { plant } = req.body;
    plantsModule.createNewPlant(plant);
    res.status(201).end();
  });

app.listen(3000, () => console.log("listening", 3000));
