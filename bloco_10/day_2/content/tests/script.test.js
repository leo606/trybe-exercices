const sumNum = require('../script');

test('não deve passar', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('deveria falhar');
    done();
  }, 2000);
});

describe('função sumNum', () => {
  it('teste de soma 5 mais 10', (done) => {
    sumNum(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  });
});
