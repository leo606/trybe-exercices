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
  if (!CEP_REGEX.test(cep)) {
    return false;
  }
  return cep.replace("-", "");
}

async function cepLookup(queryCep) {
  try {
    const [cepData] = await Cep.cepLookup(queryCep);
    if (cepData) {
      return cepData;
    }

    const cepFetch = await Cep.fetchFromViaCep(queryCep);
    if (cepFetch.erro) {
      return { error: { message: "cep does not exists" } };
    }

    const { cep, logradouro, bairro, localidade, uf } = cepFetch;
    Cep.cepCreate({
      cep: cepFetch.cep.replace("-", ""),
      logradouro,
      bairro,
      localidade,
      uf,
    });

    return { cep, logradouro, bairro, localidade, uf };
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
