const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/api/app");
const sinon = require("sinon");
const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const { expect } = chai;

chai.use(chaiHttp);

describe("GET api/users/user", () => {
  describe("ao enviar token invalido", () => {
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
        .get("/api/users/user")
        .set("authorization", "");
    });

    after(async () => {
      await MongoClient.connect.restore();
    });

    it("retorna status 200", () => {
      expect(response).to.have.status(401);
    });

    it("retorna error message", () => {
      expect(response.body).to.have.property("error", "token not found");
    });
  });

  describe("ao enviar token valido, mas usuario invalido", () => {
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
      const users = await connectionMock.db("jwt_exercise").collection("users");

      await users.insertOne({ username: "user", password: "passsss123" });
      const token = await chai
        .request(server)
        .post("/api/login")
        .send({ username: "user", password: "passsss123" })
        .then((res) => res.body.token);

      response = await chai
        .request(server)
        .get("/api/users/wrongUser")
        .set("authorization", token);
    });

    after(async () => {
      await MongoClient.connect.restore();
    });

    it("retorna status 401", () => {
      expect(response).to.have.status(401);
    });
    it("retorna error message", () => {
      expect(response.body).to.have.property("error", "access denied");
    });
  });

  describe("ao enviar token valido, usuario valido", () => {
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
      const users = await connectionMock.db("jwt_exercise").collection("users");

      await users.insertOne({ username: "user", password: "passsss123" });
      const token = await chai
        .request(server)
        .post("/api/login")
        .send({ username: "user", password: "passsss123" })
        .then((res) => res.body.token);

      response = await chai
        .request(server)
        .get("/api/users/user")
        .set("authorization", token);
    });

    after(async () => {
      await MongoClient.connect.restore();
    });

    it("retorna status 200", () => {
      expect(response).to.have.status(200);
    });
    it("retorna dados usuario", () => {
      expect(response.body).to.have.property("username", "user");
      expect(response.body).to.have.property("password", "passsss123");
    });
  });
});
