const Cep = require("../model/Cep");

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const joi = require("joi");

const cepDataSchema = joi.object().keys({
  cep: joi.string().regex(CEP_REGEX).required(),
  logradouro: joi.string().min(3).required(),
  bairro: joi.string().min(3).required(),
  localidade: joi.string().min(3).required(),
  uf: joi.string().alphanum().required(),
});

function isValid(cep) {
  return CEP_REGEX.test(cep);
}

async function cepLookup(cep) {
  try {
    const cepData = await Cep.cepLookup(cep);
    if (cepData.length) {
      return { cepData };
    }
    return { error: { message: "cep does not exist" } };
  } catch (e) {
    console.log(e);
  }
}

function isCepDataValid(data) {
  const valid = cepDataSchema.validate(data);
  return valid;
}

async function insertCep(data) {
  try {
    const inserted = await Cep.cepCreate(data);
    return inserted;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { isValid, cepLookup, isCepDataValid, insertCep };
