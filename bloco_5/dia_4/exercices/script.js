window.onload = function () {
  let settingsSection = document.getElementById('settings');
  let settingsDivs = settingsSection.getElementsByTagName('div');

  function settingsDivsClass() {
    for (let index = 0; index < settingsDivs.length; index += 1) {
      settingsDivs[index].classList = 'option-div';
    }
  }
  // settingsDivsClass();

  function changeBackgroundColor() {
    let background = document.getElementsByTagName('body')[0];
    let colorButtons = document.getElementById('background-color');
    if (localStorage.bgColor !== 'undefined') {
      background.style.backgroundColor = localStorage.bgColor;
    }
    colorButtons.addEventListener('click', function(event){
      if (event.target.className == 'white'){
        background.style.backgroundColor = 'white';
        localStorage.bgColor = 'white';
      }else {
        background.style.backgroundColor = 'grey';
        localStorage.bgColor = 'grey';
      }
    })

  }
  changeBackgroundColor();






}