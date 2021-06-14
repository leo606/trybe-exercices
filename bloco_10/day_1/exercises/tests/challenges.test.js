const challenges = require('../challenges');

describe('>>> função encode', () => {
  it('encode estar definida', () => {
    expect(challenges.encode).toBeDefined();
  });

  test('encode ser função', () => {
    expect(typeof challenges.encode).toBe('function');
  });

  it('vogais são convertidas', () => {
    expect(challenges.encode('a e i o u')).toEqual('1 2 3 4 5');
  });
});

describe('>>> função decode', () => {
  it('decode estar definida', () => {
    expect(challenges.decode).toBeDefined();
  });

  test('decode ser função', () => {
    expect(typeof challenges.decode).toBe('function');
  });

  it('vogais são convertidas', () => {
    expect(challenges.decode('1 2 3 4 5')).toEqual('a e i o u');
  });
});
