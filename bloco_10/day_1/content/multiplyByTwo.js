const multiplyByTwo = (number) => {
  if (!number) throw new Error('number is undefined');
  return number * 2;
};

module.exports = multiplyByTwo;
