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

function mundarCorCenter (div){
  div.style.backgroundColor = 'whitesmoke';
}
mundarCorCenter(document.getElementsByClassName('center-content')[0])