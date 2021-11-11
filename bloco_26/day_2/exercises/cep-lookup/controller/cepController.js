const express = require("express");
const route = express.Router();

const cepService = require("../service/cep");

route.get("/", (req, res, next) => {
  const { cep } = req.query;

  if (!cepService.isValid(cep)) {
    return next({ status: 406, message: "invalid CEP" });
  }

  res.status(200).json({ message: cep });
});

module.exports = route;
