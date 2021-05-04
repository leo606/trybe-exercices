function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCICIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulIdDays = document.getElementById('days');
let listItem = document.createElement('li');

for (let index = 0; index < dezDaysList.length; index += 1) {

  if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day holiday';
    ulIdDays.appendChild(listItem);
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day friday';
    ulIdDays.appendChild(listItem);
  } else if (dezDaysList[index] === 25) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day holiday friday';
    ulIdDays.appendChild(listItem);
  } else {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day';
    ulIdDays.appendChild(listItem);
  }

}

// EXERCICIO 2
let stringFeriados = 'Feriados';
let buttonsContainer = document.querySelector('.buttons-container');
let buttonFeriado = document.createElement('button');
buttonFeriado.id = 'btn-holiday';
buttonFeriado.innerHTML = stringFeriados;
buttonsContainer.appendChild(buttonFeriado);

// EXERCICIO 3
let holidayDays = document.querySelectorAll('#days .holiday');
buttonFeriado.addEventListener('click', changeHolidayColor);
function changeHolidayColor() {
  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor == 'orange') {
      holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidayDays[index].style.backgroundColor = 'orange';
    }
  }
}

// EXERCICIO 4
let stringFriday = 'Sexta-feira';
let buttonFriday = document.createElement('button');
buttonFriday.id = 'btn-friday';
buttonFriday.innerHTML = stringFriday;
buttonsContainer.appendChild(buttonFriday);

// EXERCICIO 5
buttonFriday.addEventListener('click', changeFridayText);
let fridayDays = [4, 11, 18, 25];
let fridays = document.getElementsByClassName('friday');
function changeFridayText() {
  for (let index in fridays) {
    if (fridays[index].innerHTML === 'SEXTOU!') {
      fridays[index].innerHTML = fridayDays[index];
    } else {
      fridays[index].innerHTML = 'SEXTOU!';
    }
  }
}

// EXERCICIO 6

function zoomIn() {
  let daysId = document.querySelector('#days');

  daysId.addEventListener('mouseover', function (origem) {
    origem.target.style.fontSize = '23px';

  })
};

function zoomOut() {
  let daysId = document.querySelector('#days');

  daysId.addEventListener('mouseout', function (origem) {
    origem.target.style.fontSize = '20px';
  })
};
zoomIn();
zoomOut();

// EXERCICIO 7
function addTask(string) {
  let myTasks = document.querySelector('.my-tasks');
  let createSpan = document.createElement('span');
  createSpan.innerHTML = string;
  myTasks.appendChild(createSpan);
}
addTask();

// EXERCICIO 8
function addColorLegenda(color) {
  let myTasks = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  myTasks.appendChild(createDiv);
}
addColorLegenda();

// EXERCICIO 9
function taskSelected(){
  let taskDiv = document.querySelector('.task');

  taskDiv.addEventListener('click', function(origem) {
    if (origem.target.className == 'task selected'){
      origem.target.className = 'task';
    }else {
      origem.target.className = 'task selected';
    }
  })
}
taskSelected();
