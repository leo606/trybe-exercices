const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

it('Sunday is a weekday', () => {
  expect(weekDays).toContain('Sunday');
});

it('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});
