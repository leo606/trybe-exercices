document.getElementById('container').style.backgroundColor = 'whitesmoke';
document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';

let emergencyH3s = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyH3s.length; index += 1){
  emergencyH3s[index].style.backgroundColor = 'purple';
};


document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = 'yellow';

let noEmergencyH3s = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyH3s.length; index += 1){
  noEmergencyH3s[index].style.backgroundColor = 'black';
};

document.getElementById('footer-container').style.backgroundColor = 'darkgreen'
