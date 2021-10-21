const {expect} = require('chai');
const calcAvg = require('../calcAvg');

describe('quando a media for menor q 7', ()=> {
  it('retorna "reprovado"', ()=> {
    const resp = calcAvg(4);
    expect(resp).equals('reprovado');
  });
});

describe('quando a media for maior q 7', ()=> {
  it('retorna "reprovado"', ()=> {
    const resp = calcAvg(8);
    expect(resp).equals('aprovado');
  });
});

describe('quando a media for igual a 7', ()=> {
  it('retorna "reprovado"', ()=> {
    const resp = calcAvg(7);
    expect(resp).equals('aprovado');
  });
})