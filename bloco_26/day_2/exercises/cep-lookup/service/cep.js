const Cep = require("../model/Cep");

const CEP_REGEX = /^\d{5}-?\d{3}$/;

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

module.exports = { isValid, cepLookup };
