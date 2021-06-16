// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName
// para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const { findUserById, getUserName } = require('../script2');

describe('declaração da função findUserById', () => {
  it('está declarada', () => {
    expect(getUserName).toBeDefined();
  });

  it('ser uma função', () => {
    expect(typeof getUserName).toEqual('function');
  });
});

describe('retorno da função getUserName', () => {
  it('usuário é encontrado', (done) => {
    getUserName(4).then((user) => {
      expect(user).toEqual('Mark');
      done();
    });
  });

  it('usuário é encontrado', (done) => {
    getUserName(5).then((user) => {
      expect(user).toEqual('Paul');
      done();
    });
  });
});
