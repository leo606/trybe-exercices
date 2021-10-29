const { MongoClient } = require("mongodb");

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = "mongodb://localhost:27017";

let db = null;

function connection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((connection) => {
        db = connection.db("model_example");
        return db;
      });
}

module.exports = connection;
