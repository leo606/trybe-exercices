const connection = require("./connection");

const LOOKUP_QUERY = "SELECT * FROM ceps WHERE cep = ?";
const CREATE_QUERY =
  "INSERT INTO ceps(cep,logradouro,bairro,localidade,uf) VALUES (?,?,?,?,?)";

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

module.exports = { cepLookup, cepCreate };
