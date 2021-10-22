const fs = require("fs").promises;
const { expect } = require("chai");
const sinon = require("sinon");
const writeFile = require("../writeFile");

const fileName = "./fileName.txt";
const fileContent = "file content";

describe("writeFile", () => {
  describe("escrever arquivo", () => {
    before(() => {
      sinon.stub(fs, "writeFile").resolves();
    });
    after(() => {
      fs.writeFile.restore();
    });
    it("escrita ok", async () => {
      const resp = await writeFile(fileName, fileContent);
      expect(resp).a("string");
      expect(resp).equal("ok");
    });
  });

  describe("erro ao escrever arquivo", () => {
    before(() => {
      sinon.stub(fs, "writeFile").rejects(new Error("not ok"));
    });
    after(() => {
      fs.writeFile.restore();
    });
    it("escrita nao ok", async () => {
      const resp = await writeFile(fileName, fileContent);
      expect(resp).a("string");
      expect(resp).equal("not ok");
    });
  });

  describe("parametro nao string", () => {
    it("input de number", async () => {
      const resp = await writeFile(3, 3);
      expect(resp).a("string");
      expect(resp).equal("type must be a string");
    });
  });
});
