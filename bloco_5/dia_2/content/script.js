document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'orange';

document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Esse é o primeiro filho do filho'

document.getElementById('pai').firstElementChild;

document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

document.querySelector('#elementoOndeVoceEsta').nextSibling;

document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

document.getElementById('pai').lastElementChild.previousElementSibling;

// creteElement() -- cria elementos HTML
// appendChild() -- adiciona no HTML

let pai = document.querySelector('#pai');
let divIrmao = document.createElement('div');
divIrmao.innerHTML = 'pipipopo'
pai.appendChild(divIrmao);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let divFilho = document.createElement('div')
divFilho.innerHTML = 'rsrs'
elementoOndeVoceEsta.appendChild(divFilho);

// document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('div').innerHTML = 'hohoh')

let primeiroFilhoDoFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
let divPrimeiroFilho = document.createElement('div')
divPrimeiroFilho.innerHTML = 'esse é um filho do primeiro filho do filho'
primeiroFilhoDoFilho.appendChild(divPrimeiroFilho);

document.querySelector('#primeiroFilhoDoFilho div').parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
// asdfasdadd.removeChild(elemt);

let paiDoPai = document.querySelectorAll('#paiDoPai')

