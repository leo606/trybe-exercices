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
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2 (main-content);

function addDivLeftContent (){
  let divMainContent = document.querySelector('.main-content');
  let divLeftContent = document.createElement('div');
  divLeftContent.className = 'left-content';
  divMainContent.appendChild(divLeftContent);  
}
addDivLeftContent();

// EXERCICIO 6
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

function addDivRightContent (){
  let divMainContent = document.querySelector('.main-content');
  let divRightContent = document.createElement('div');
  divRightContent.className = 'right-content';
  divMainContent.appendChild(divRightContent);
}
addDivRightContent();

// EXERCICIO 7
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

function addImgInLeftContent (){
  let imgTag = document.createElement('img');
  let divLeftContent = document.querySelector('.left-content');
  imgTag.src = 'https://picsum.photos/200';
  divLeftContent.appendChild(imgTag);
}
addImgInLeftContent();

// EXERCICIO 8
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

function addListInRightContent (){
  let numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
  let divRightContet = document.querySelector('.right-content');
  let ul = document.createElement('ul');
  divRightContet.appendChild(ul);
  
  for (let index = 0; index < numbers.length; index += 1){
    let numeroExtenso = numbers[index];
    let listItem = document.createElement('li');
    listItem.innerHTML = numeroExtenso;
    ul.appendChild(listItem);
  }

}
addListInRightContent();

// EXERCICIO 9
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2

function add3TagsH3InMainContent (){
  let divMainContent = document.querySelector('.main-content');
  
  for (let index = 0; index < 3; index += 1){
    let h3 = document.createElement('h3');
    divMainContent.appendChild(h3);
  }
}
add3TagsH3InMainContent();
