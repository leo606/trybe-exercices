const mongoConnection = require("./connection");

async function create({ title, directedBy, releaseYear }) {
  const db = await mongoConnection.getConnection();

  const { insertedId: id } = db
    .collection("movies")
    .insertOne({ title, directedBy, releaseYear });

  return { id };
}

module.exports = { create };
