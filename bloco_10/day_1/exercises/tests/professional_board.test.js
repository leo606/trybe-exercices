const searchEmployee = require('../professional_board');

describe('searchEmployee type', () => {
  it('searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('searchEmployee is function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});

describe('searchEmployee return', () => {
  test('recebendo id e firstName retorna esperado', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  test('recebendo id e firstName retorna esperado', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
  });

  it('Caso não exista o ID, retorna "ID não identificada"', () => {
    expect(searchEmployee('856905687', 'firstName')).toEqual(
      'ID não identificada'
    );
  });
});
