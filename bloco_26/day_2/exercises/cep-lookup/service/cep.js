const CEP_REGEX = /^\d{5}-?\d{3}$/;

function isValid(cep) {
  return CEP_REGEX.test(cep);
}

module.exports = { isValid };
