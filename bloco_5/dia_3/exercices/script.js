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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulIdDays = document.getElementById('days');
let listItem = document.createElement('li');

for (let index = 0; index < dezDaysList.length; index += 1) {

  if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day holiday'
    ulIdDays.appendChild(listItem);
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day friday'
    ulIdDays.appendChild(listItem);
  } else if (dezDaysList[index] === 25) {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day holiday friday'
    ulIdDays.appendChild(listItem);
  } else {
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listItem.className = 'day'
    ulIdDays.appendChild(listItem);
  }

}
