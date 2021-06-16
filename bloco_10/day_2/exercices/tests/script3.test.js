// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

const { findUserById, getUserName } = require('../script2');

describe('retorno da função getUserName', () => {
  it('usuário é encontrado', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });

  it('usuário é encontrado', async () => {
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });

  it('retorna o erro correto', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error['error']).toBe('User with 1 not found.');
    }
  });

  it('retorna o erro correto', async () => {
    try {
      await getUserName(43);
    } catch (error) {
      expect(error['error']).toBe('User with 43 not found.');
    }
  });
});
