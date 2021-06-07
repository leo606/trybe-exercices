function sayHello() {
  console.log('Hello');
}

let myvar = setInterval(sayHello, 100);

setTimeout(() => clearInterval(myvar), 6500);
