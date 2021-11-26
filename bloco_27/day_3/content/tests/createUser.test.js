const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/api/app");
const sinon = require("sinon");
const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const { expect } = chai;

chai.use(chaiHttp);

describe("POST api/users", () => {
  describe("quando é criado com sucesso", () => {
    let response = {};
    let connectionMock;
    let DB_SERVER;

    before(async () => {
      DB_SERVER = await MongoMemoryServer.create();
      const DB_URI = DB_SERVER.getUri();
      connectionMock = await MongoClient.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, "connect").resolves(connectionMock);

      response = await chai
        .request(server)
        .post("/api/users")
        .send({ username: "user", password: "passsss123" });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DB_SERVER.stop();
    });

    it("retorna status 200", () => {
      expect(response).to.have.status(201);
    });

    it("retorna object", () => {
      expect(response.body).to.be.a("object");
    });

    it("object ter a key message", () => {
      expect(response.body).to.have.property("message");
    });

    it("message ter o texto correto", () => {
      expect(response.body).to.have.property(
        "message",
        "Novo usuário criado com sucesso"
      );
    });
  });
});
