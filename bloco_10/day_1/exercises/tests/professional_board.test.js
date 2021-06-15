const searchEmployee = require('../professional_board');

describe('>>> searchEmployee type', () => {
  it('searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('searchEmployee is function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});

describe('>>> searchEmployee return', () => {
  test('testa de searchEmployee recebendo id e firstName retorna esperado', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
});
