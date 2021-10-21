const fs = require("fs");
const sinon = require("sinon");
const { expect } = require("chai");

const leArquivo = require("../readFile");

const fileContent = "this is a content";

describe("leArquivo", () => {
  describe("quando arquivo existe", () => {
    before(() => {
      sinon.stub(fs, "readFileSync").returns(fileContent);
    });
    after(() => {
      fs.readFileSync.restore();
    });

    describe("a resposta", () => {
      const resp = leArquivo("file.txt");

      it("é uma string", () => {
        expect(resp).a("string");
      });

      it("é igual ao conteudo do arquivo", () => {
        expect(resp).equal(fileContent);
      });
    });
  });

  describe("quando arquivo não existe", () => {
    before(()=>{
      sinon.stub(fs, "readFileSync").throws(new Error("not found"));
    });

    after(()=>{
      fs.readFileSync.restore();
    })

    describe("a resposta", () => {
      const resp = leArquivo("file.txt");

      it("é null", () => {
        expect(resp).equal(null);
      });
    });
  });
});
