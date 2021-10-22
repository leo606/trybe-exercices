const { expect } = require("chai");
const checkNumber = require("../checkNumber");

describe("checkNumber", () => {
  describe("caso positivo", () => {
    it("numero positivo", () => {
      const resp = checkNumber(3);
      expect(resp).a('string');
      expect(resp).equal("positivo");
    });
  });

  describe("caso negativo", () => {
    it("numero negativo", () => {
      const resp = checkNumber(-3);
      expect(resp).a('string');
      expect(resp).equal("negativo");
    });
  });

  describe("caso neutro", () => {
    it("zero", () => {
      const resp = checkNumber(0);
      expect(resp).a('string');
      expect(resp).equal("neutro");
    });
  });

  describe("caso tipo não é number", () => {
    it("input string", () => {
      const resp = checkNumber('string');
      expect(resp).a('string');
      expect(resp).equal("o valor deve ser um número");
    });
  });
});
