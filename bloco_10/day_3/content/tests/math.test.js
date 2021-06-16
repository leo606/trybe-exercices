const { test, expect } = require('@jest/globals');
const math = require('../math');

// jest.mock('../math');

test('somar', () => {
  const spySomar = jest.spyOn(math, 'somar');

  spySomar(1, 2);
  expect(spySomar).toHaveBeenCalledTimes(1);
  expect(spySomar).toHaveBeenCalledWith(1, 2);
  expect(spySomar(1, 2)).resolves.toBe(3);
});
