const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
divUm.addEventListener('click', recebeClick);
divDois.addEventListener('click', recebeClick);
divTres.addEventListener('click', recebeClick);
function recebeClick(origem) {
  if (origem.target == divUm) {
    divDois.classList.remove('tech');
    divTres.classList.remove('tech');
    divUm.className = 'tech';
  }
  if (origem.target == divDois) {
    divUm.classList.remove('tech');
    divTres.classList.remove('tech');
    divDois.className = 'tech';
  }
  if (origem.target == divTres) {
    divUm.classList.remove('tech');
    divDois.classList.remove('tech');
    divTres.className = 'tech';
  }
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', inputToTech)
input.addEventListener('blur', clearInput)
function inputToTech(origem) {
  let pInTech = document.querySelector('.container .tech');
  pInTech.innerHTML = input.value;
}
function clearInput() {
  input.value = '';
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', redirect)
function redirect() {
  window.location.href = 'https://leo606.github.io'
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseenter', changeTop3ColorIn)
myWebpage.addEventListener('mouseleave', changeTop3ColorOut)
function changeTop3ColorIn() {
  myWebpage.style.color = 'orange';
}
function changeTop3ColorOut() {
  myWebpage.style.color = 'white'
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.