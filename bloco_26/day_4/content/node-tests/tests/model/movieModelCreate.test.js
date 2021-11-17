const { expect } = require("chai");
const sinon = require("sinon");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

const MovieModel = require("../../models/moviesModel");
const mongoConnection = require("../../models/connection");

describe("inserir filme no DB", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };
  const DB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  let connectionMock;

  before(async () => {
    const memoryServer = await MongoMemoryServer.create();
    const mockURI = memoryServer.getUri();

    connectionMock = await MongoClient.connect(mockURI, DB_OPTIONS).then(
      (conn) => conn.db("model_example")
    );

    sinon.stub(mongoConnection, "getConnection").resolves(connectionMock);
  });

  describe("inserido com sucesso", () => {
    it("retorna um objeto", async () => {
      const response = await MovieModel.create(payloadMovie);
      expect(response).to.be.a("object");
    });

    it("possui o id do nove filme", async () => {
      const response = await MovieModel.create(payloadMovie);
      expect(response).to.have.a.property("id");
    });

    it("filme salvo no banco", async () => {
      await MovieModel.create(payloadMovie);
      const queryNewMovie = await connectionMock
        .collection("movies")
        .findOne({ title: "Example Movie" });

      expect(queryNewMovie).to.be.not.null;
    });
  });
});
