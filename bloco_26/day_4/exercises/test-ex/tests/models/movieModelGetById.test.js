const sinon = require("sinon");
const { expect } = require("chai");
const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongoConnection = require("../../models/connection");
// const MoviesModel = require("../../models/movieModel");

const MoviesModel = {
  getById: async () => {},
};

describe("retorna um filme por ID", () => {
  const expectedMovie = {
    id: "604cb554311d68f491ba5781",
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };
  const WRONG_ID = "604cb554311d68f491ba3333";

  let connectionMock;
  const DB_OPTS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  before(async () => {
    const mockDBServer = await MongoMemoryServer.create();
    const DB_URI = mockDBServer.getUri();

    connectionMock = await MongoClient.connect(DB_URI, DB_OPTS).then((conn) =>
      conn.db("model_example")
    );

    sinon.stub(mongoConnection, "getConnection").resolves(connectionMock);
  });

  after(() => mongoConnection.getConnection.restore());

  describe("quando não existe filme cadastrado", async () => {
    it("retorna null", async () => {
      const movie = await MoviesModel.getById(expectedMovie.id);
      expect(movie).to.be.null;
    });
  });

  describe("quando não encontra o filme", async () => {
    it("retorna null", async () => {
      await connectionMock.collection("movies").insertOne({ ...expectedMovie });

      const movie = await MoviesModel.getById(WRONG_ID);
      expect(movie).to.be.null;
    });
  });

  describe("quando encontra o filme", async () => {
    before(async () => {
      await connectionMock.collection("movies").insertOne({ ...expectedMovie });
    });

    after(async () => {
      await connectionMock.collection("movies").drop();
    });

    it("retorna object", async () => {
      const movie = await MoviesModel.getById(expectedMovie.id);
      expect(movie).to.be.an("object");
    });

    it("retorna filme esperado", async () => {
      const movie = await MoviesModel.getById(expectedMovie.id);
      expect(movie).to.be.equal(expectedMovie);
    });
  });
});
