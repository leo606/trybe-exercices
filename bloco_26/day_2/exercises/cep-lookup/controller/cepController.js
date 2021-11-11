const express = require("express");
const route = express.Router();

const cepService = require("../service/cep");

route.get("/", async (req, res, next) => {
  const { cep } = req.query;

  if (!cepService.isValid(cep)) {
    return next({ status: 406, message: "invalid CEP" });
  }

  const cepReturn = await cepService.cepLookup(cep);
  if (cepReturn.error) {
    return next({ status: 404, message: cepReturn.error.message });
  }

  res.status(200).json(cepReturn);
});

module.exports = route;
