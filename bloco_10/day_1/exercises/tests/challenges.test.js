const challenges = require('../challenges');

describe('funcao encode', () => {
  it('encode estar definida', () => {
    expect(challenges.encode).toBeDefined();
  });

  test('encode ser funcao', () => {
    expect(typeof challenges.encode).toEqual('function');
  });

  it('vogais são convertidas', () => {
    expect(challenges.encode('a e i o u')).toBe('1 2 3 4 5');
  });
});
