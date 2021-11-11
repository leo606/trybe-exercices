const express = require("express");
const route = express.Router();

const cepService = require("../service/cep");

route.get("/", (req, res, next) => {
  const { cep } = req.query;

  res.status(200).json({ message: cep });
});

module.exports = route;
