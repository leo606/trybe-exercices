const { expect } = require('@jest/globals');
const service = require('../service');

test('#randomRgbColor', () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('rgb(255, 255, 255)')
    .mockReturnValueOnce('first')
    .mockReturnValueOnce('second')
    .mockReturnValueOnce('third');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe('first');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe('second');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe('third');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);

  expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(4);
});
