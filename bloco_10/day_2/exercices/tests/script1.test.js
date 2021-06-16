const uppercase = require('../script1');

describe('testa chamada do callback da função uppercase', () => {
  it('return uppercase', () => {
    uppercase('test', (result) => {
      expect(result).toBe('TEST');
    });
  });
});
