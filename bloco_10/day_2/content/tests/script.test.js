test('não deve passar', (done) => {
  setTimeout(() => {
    expect(10).toBe(10);
    console.log('deveria falhar');
    done();
  }, 2000);
});
