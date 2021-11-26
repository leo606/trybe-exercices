const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { expect } = require("chai");
const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const server = require("../src/api/app");

chai.use(chaiHttp);

describe("GET /api/users/laksjy", () => {
  describe("quando não enviar token", () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get("/api/users/ijdjhfg")
        .set("authorization", "");
    });

    it("retorna status 401", () => {
      expect(response).to.have.status(401);
    });

    it("retorna mensagem: 'Token não encontrado ou informado'", () => {
      expect(response.body).to.have.property("error", "token not found");
    });
  });
});
