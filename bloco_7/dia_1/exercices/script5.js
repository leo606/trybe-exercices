const btn = document.getElementById('count-btn');
const counter = document.getElementById('counter');
let clickCount = 0;

btn.addEventListener('click', () => counter.innerHTML = clickCount += 1);