// EXERCICIO 1
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.querySelector('body');
let bodyH1 = document.createElement('h1')
bodyH1.innerHTML = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(bodyH1);

// EXERCICIO 2
// Adicione a tag div com a classe main-content como filho da tag body ;
function addTagDivMainContent (){
  let div = document.createElement('div');
  div.className = 'main-content';
  body.appendChild(div);
}
addTagDivMainContent();

// EXERCICIO 3
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

function addDivCenterContent (){
  let div = document.createElement('div');
  div.className = 'center-content';
  let divMainContent = document.querySelector('.main-content');
  divMainContent.appendChild(div);
}
addDivCenterContent();

// EXERCICIO 4
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

function addPIntoDivCenterContent (){
  let divCenterContent = document.querySelector('.main-content .center-content');
  let paragrafo = document.createElement('p');
  paragrafo.innerHTML = 'Esse é o parágrafo injetado na DIV de classe .center-content';
  divCenterContent.appendChild(paragrafo);
}
addPIntoDivCenterContent();

// EXERCICIO 5
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;


