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

route.post("/", async (req, res, next) => {
  const cepData = ({ cep, logradouro, bairro, localidade, uf } = req.body);
  const valid = cepService.isCepDataValid(cepData);
  if (valid.error) {
    return next({
      status: 400,
      code: "invalidData",
      message: valid.error.message,
    });
  }
  const cepLookup = await cepService.cepLookup(cep);
  if (cepLookup.length) {
    return next({
      status: 409,
      code: "alreadyExists",
      message: "CEP existente",
    });
  }

  await cepService.insertCep(cepData);
  res.status(201).send();
});

module.exports = route;
