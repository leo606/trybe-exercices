// EXERCICIO 1:
function mudarParagrafo (paragrafo, text){
  paragrafo.innerHTML = text;
}
mudarParagrafo(document.getElementById('paragrafo'), 'daqui a dois anos vou estar codando demais');

// EXERCICIO 2:
function mudarCorMain(div){
  div.style.backgroundColor = 'rgb(76,164,109)'
}
mudarCorMain(document.getElementsByClassName('main-content')[0]);

// EXERCICIO 3:
function mundarCorCenter (div){
  div.style.backgroundColor = 'whitesmoke';
}
mundarCorCenter(document.getElementsByClassName('center-content')[0])

// EXERCICIO 4:
function corrigeH1 (heading){
  heading.innerHTML = 'Exercício 5.1 - JavaScript';
}
corrigeH1(document.getElementsByClassName('title')[0]);

// EXERCICIO 5:
function toUpper (paragrafo){
  for (let index = 0; index < paragrafo.length; index += 1){    
    paragrafo[index].innerHTML = paragrafo[index].innerHTML.toUpperCase();
  }
}
toUpper(document.getElementsByTagName('p'));

// EXERCICIO 6:
function printParagraphs (paragrafos){
  for (let index = 0; index < paragrafos.length; index += 1){
    console.log(paragrafos[index].innerHTML);
  }
}
printParagraphs(document.getElementsByTagName('p'));
