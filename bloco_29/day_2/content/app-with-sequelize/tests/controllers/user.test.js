const chai = require("chai");
const { stub } = require("sinon");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const { expect } = chai;

const app = require("../../index");
const { User } = require("../../models");

describe("Busca todos os usuários", () => {
  describe("quando não existe nenhum usuário cadastrado", () => {
    const findAllStub = stub(User, "findAll");

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it("called User.findAll", async () => {
      await chai.request(app).get("/user");

      expect(User.findAll.calledOnce).to.be.equals(true);
    });
  });
});
