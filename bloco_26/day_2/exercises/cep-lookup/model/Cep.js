const connection = require("./connection");

const LOOKUP_QUERY = "SELECT * FROM ceps WHERE cep = ?";

async function cepLookup(cep) {
  try {
    const [cepData] = await connection.execute(LOOKUP_QUERY, [cep]);
    return cepData;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { cepLookup };
