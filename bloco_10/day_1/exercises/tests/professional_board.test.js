const searchEmployee = require('../professional_board');

describe('searchEmployee test', () => {
  it('searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('searchEmployee is function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});
