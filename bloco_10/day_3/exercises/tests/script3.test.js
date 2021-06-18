const script = require('../script3');

describe('teste de requisicao', () => {
  script.fetchDog = jest.fn();
  afterEach(script.fetchDog.mockReset);

  test('teste caso resolve', () => {
    script.fetchDog.mockResolvedValue('ok');

    script.fetchDog();
    expect(script.fetchDog).toHaveBeenCalled();
    expect(script.fetchDog).toHaveBeenCalledTimes(1);
    expect(script.fetchDog()).resolves.toBe('ok');
    expect(script.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('teste caso reject', () => {
    script.fetchDog.mockRejectedValue('not ok');

    expect(script.fetchDog).toHaveBeenCalledTimes(0);
    expect(script.fetchDog()).rejects.toBe('not ok');
    expect(script.fetchDog).toHaveBeenCalledTimes(1);
  });
});
