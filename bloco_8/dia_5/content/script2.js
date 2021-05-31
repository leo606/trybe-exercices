function average(...args) {
  return args.reduce((a, b) => a + b) / args.length;
}

console.log(average(10, 5, 1, 12, 54, 4, 8, 4, 1, 78));
