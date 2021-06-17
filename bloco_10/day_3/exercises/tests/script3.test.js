const script = require('../script3');

describe('teste de requisicao', () => {
  const apiURL = jest.spyOn(script, 'fetchDog');
  afterEach(apiURL.mockReset);

  test('teste caso resolve', () => {
    apiURL.mockResolvedValue('ok');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('ok');
    expect(apiURL).toHaveBeenCalledTimes(2);

  });

  test('teste caso reject', () => {
    apiURL.mockRejectedValue('not ok');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toBe('not ok');
    expect(apiURL).toHaveBeenCalledTimes(1);

  });
});
