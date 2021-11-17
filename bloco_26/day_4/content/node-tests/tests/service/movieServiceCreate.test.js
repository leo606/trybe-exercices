const { expect } = require("chai");
const sinon = require("sinon");

const MovieModel = require("../../models/moviesModel");
const MovieService = require("../../services/movieService");

describe("insere um novo filme do banco", () => {
  describe("quando o payload nao é valido", () => {
    const payload = {};

    it("retorna um boolean", async () => {
      const resp = await MovieService.create(payload);
      expect(resp).to.be.a("boolean");
    });

    it("retorna um false", async () => {
      const resp = await MovieService.create(payload);
      expect(resp).to.be.equal(false);
    });
  });

  describe("quando é inserido com sucesso", () => {
    const payload = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    it("retorna um objeto", async () => {
      const resp = await MovieService.create(payload);
      expect(resp).to.be.a("object");
    });

    it("retorna um objeto com o id", async () => {
      const resp = await MovieService.create(payload);
      expect(resp).to.have.a.property("id");
    });
  });
});
