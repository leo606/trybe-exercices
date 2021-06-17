const { upper, firstLetter, concatStrings } = require('../script2');

jest.mock('../script2');

describe('nova implementação para upper', () => {
  test('upper lower', () => {
    upper.mockImplementation((str) => str.toLowerCase());
    expect(upper('TEST')).toBe('test');
    expect(upper).toHaveBeenCalled();
    expect(upper).toHaveBeenCalledWith('TEST');
    expect(upper).toHaveBeenCalledTimes(1);
  });
});

describe('nova implementação para firstLetter', () => {
  test('firstLetter lastLetter', () => {
    firstLetter.mockImplementation((str) => str[str.length - 1]);
    expect(firstLetter('xablau')).toBe('u');
    expect(firstLetter('giraffe')).toBe('e');
    expect(firstLetter).toHaveBeenCalledTimes(2);
    expect(firstLetter).toHaveBeenCalledWith('xablau');
  });
});

describe('nova implementação para concatStrings', () => {
  test('firstLetter concatStrings', () => {
    concatStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    expect(concatStrings('um', 'dois', 'tres')).toBe('umdoistres');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledWith('um', 'dois', 'tres');
  });
});
