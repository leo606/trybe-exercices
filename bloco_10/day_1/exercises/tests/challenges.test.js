const challenges = require('../challenges');

describe('>>> função encode', () => {
  it('encode estar definida', () => {
    expect(challenges.encode).toBeDefined();
  });

  test('encode ser função', () => {
    expect(typeof challenges.encode).toBe('function');
  });

  it('vogais são convertidas', () => {
    expect(challenges.encode('a e i o u')).toBe('1 2 3 4 5');
  });

  test('consoantes não são convertidas', () => {
    expect(challenges.encode('b c d f g h j k l m n p q r s t v w x y z')).toBe(
      'b c d f g h j k l m n p q r s t v w x y z'
    );
  });

  test('número de caracteres não ser alterado', () => {
    const input = 'aeiou';
    const response = challenges.encode(input);
    expect(response.length).toBe(5);
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

  test('outros números não são convertidos', () => {
    expect(challenges.decode('6 7 8 9 0')).toBe('6 7 8 9 0');
  });
});
