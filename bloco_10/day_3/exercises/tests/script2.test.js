const script = require('../script2');

jest.mock('../script2');

describe('nova implementação para upper', () => {
  test('upper lower', () => {
    // upper.mockImplementation((str) => str.toLowerCase());

    const mockUpper = jest
      .spyOn(script, 'upper')
      .mockImplementation((str) => str.toLowerCase());

    expect(mockUpper('TEST')).toBe('test');
    expect(mockUpper).toHaveBeenCalled();
    expect(mockUpper).toHaveBeenCalledWith('TEST');
    expect(mockUpper).toHaveBeenCalledTimes(1);
  });
});

describe('nova implementação para firstLetter', () => {
  test('firstLetter lastLetter', () => {
    const firstLetterMock = jest
      .spyOn(script, 'firstLetter')
      .mockImplementation((str) => str[str.length - 1]);

    expect(firstLetterMock('xablau')).toBe('u');
    expect(firstLetterMock('giraffe')).toBe('e');
    expect(firstLetterMock).toHaveBeenCalledTimes(2);
    expect(firstLetterMock).toHaveBeenCalledWith('xablau');
  });
});

describe('nova implementação para concatStrings', () => {
  test('firstLetter concatStrings', () => {
    const concatStringsMock = jest
      .spyOn(script, 'concatStrings')
      .mockImplementation((str1, str2, str3) => str1 + str2 + str3);

    expect(concatStringsMock('um', 'dois', 'tres')).toBe('umdoistres');
    expect(concatStringsMock).toHaveBeenCalled();
    expect(concatStringsMock).toHaveBeenCalledWith('um', 'dois', 'tres');
  });
});
