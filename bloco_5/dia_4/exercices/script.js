window.onload = function () {
  let settingsSection = document.getElementById('settings');
  let settingsDivs = settingsSection.getElementsByTagName('div');

  function settingsDivsClass() {
    for (let index = 0; index < settingsDivs.length; index += 1) {
      settingsDivs[index].classList = 'option-div';
    }
  }
  // settingsDivsClass(); ---- ACHO Q NÃO VOU PRECISAR DISSO

  function changeBackgroundColor() {
    let background = document.getElementsByTagName('body')[0];
    let colorButtons = document.getElementById('background-color');
    if (localStorage.bgColor !== 'undefined') {
      background.style.backgroundColor = localStorage.bgColor;
    }
    colorButtons.addEventListener('click', function (event) {
      if (event.target.className == 'white') {
        background.style.backgroundColor = 'white';
        localStorage.bgColor = 'white';
      } else {
        background.style.backgroundColor = 'grey';
        localStorage.bgColor = 'grey';
      }
    })

  }
  changeBackgroundColor();

  function changeTextColor() {
    let text = document.querySelectorAll('p');
    let textColorButtons = document.getElementById('text-color');
    if (localStorage.textColor !== 'undefined') {
      for (let index = 0; index < text.length; index += 1) {
        text[index].style.color = localStorage.textColor;
      }
    }

    textColorButtons.addEventListener('click', function (event) {
      if (event.target.className == 'white') {
        for (let index = 0; index < text.length; index += 1) {
          text[index].style.color = 'white';
          localStorage.textColor = text[index].style.color;
        }
      } else {
        for (let index = 0; index < text.length; index += 1) {
          text[index].style.color = 'black';
          localStorage.textColor = text[index].style.color;
        }
      }
    })
  }
  changeTextColor();

  function changeFontSize() {
    let articles = document.getElementsByTagName('article');
    let fontSizeButtons = document.getElementById('font-size');

    if (localStorage.fontSize !== undefined) {
      for (let index = 0; index < articles.length; index += 1) {
        articles[index].style.fontSize = localStorage.fontSize;
      }
    }

    fontSizeButtons.addEventListener('click', function (event) {
      if (event.target.innerHTML == 'Grande') {
        for (let index = 0; index < articles.length; index += 1) {
          articles[index].style.fontSize = 'large';
          localStorage.fontSize = articles[index].style.fontSize;
        }
      } else if (event.target.innerHTML == 'Media') {
        for (let index = 0; index < articles.length; index += 1) {
          articles[index].style.fontSize = 'medium';
          localStorage.fontSize = articles[index].style.fontSize;
        }
      } else {
        for (let index = 0; index < articles.length; index += 1) {
          articles[index].style.fontSize = 'small';
          localStorage.fontSize = articles[index].style.fontSize;
        }
      }
    })
  }
  changeFontSize();

  function changelineSpacing() {
    let paragraph = document.getElementsByTagName('p');
    let lineSpacingButton = document.getElementById('line-spacing');

    if (localStorage.lineSpacing !== 'undefined') {
      for (let index = 0; index < paragraph.length; index += 1) {
        paragraph[index].style.lineHeight = localStorage.lineSpacing;
      }
    }

    lineSpacingButton.addEventListener('click', function (event) {
      if (event.target.innerHTML === 'Grande') {
        for (let index = 0; index < paragraph.length; index += 1) {
          paragraph[index].style.lineHeight = '60px';
          localStorage.lineSpacing = paragraph[index].style.lineHeight;
        }
      } else if (event.target.innerHTML === 'Media') {
        for (let index = 0; index < paragraph.length; index += 1) {
          paragraph[index].style.lineHeight = '30px';
          localStorage.lineSpacing = paragraph[index].style.lineHeight;
        }
      } else {
        for (let index = 0; index < paragraph.length; index += 1) {
          paragraph[index].style.lineHeight = '20px';
          localStorage.lineSpacing = paragraph[index].style.lineHeight;
        }
      }
    })
  }

  changelineSpacing();


}