const connection = require("./connection");
const axios = require("axios");

const LOOKUP_QUERY = "SELECT * FROM ceps WHERE cep = ?";
const CREATE_QUERY =
  "INSERT INTO ceps(cep,logradouro,bairro,localidade,uf) VALUES (?,?,?,?,?)";
const VIA_CEP_URL = "https://viacep.com.br/ws/<cep>/json/";

async function cepLookup(cep) {
  try {
    const [cepData] = await connection().execute(LOOKUP_QUERY, [cep]);
    return cepData;
  } catch (e) {
    console.log(e);
  }
}

async function cepCreate(cepData) {
  try {
    const [created] = await connection().execute(CREATE_QUERY, [
      cepData.cep,
      cepData.logradouro,
      cepData.bairro,
      cepData.localidade,
      cepData.uf,
    ]);
    return created;
  } catch (e) {
    console.log(e);
  }
}

async function fetchFromViaCep(cep) {
  try {
    const req = await axios.get(VIA_CEP_URL.replace("<cep>", cep));
    // const resp = await req.json();
    return req.data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { cepLookup, cepCreate, fetchFromViaCep };
