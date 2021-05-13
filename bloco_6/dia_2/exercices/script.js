const statesOptions = () => {
  let estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goías', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraíma', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];
  let selectTag = document.getElementById('input-states');
  for (let index = 0; index < estados.length; index += 1) {
    let createOption = document.createElement('option');
    createOption.value = estados[index].substring(0, 2);
    createOption.innerHTML = estados[index];
    selectTag.appendChild(createOption);
  }
}

const checkDate = (event) => {
  let dia = parseInt(event.target.value.substring(0, 2));
  let mes = parseInt(event.target.value.substring(3, 5));
  let ano = parseInt(event.target.value.substring(6, 10));

  if (event.target.value.length > 0 && event.target.value.length !== 10) {
    alert('Data em formato inválido')
  } else {
    if (dia < 0 || dia > 31) {
      alert('Dia inválido');
      startDate.value = '';
    }
    if (mes < 0 || mes > 12) {
      alert('Mês inválido');
      startDate.value = '';
    }
    if (ano < 0) {
      alert('Ano inválido');
      startDate.value = '';
    }
  }
}

// VALIDACOES:
function formValidation(event) {
  event.preventDefault();
  let validations = [];
  let errorDiv = document.getElementById('error');
  errorDiv.style.color = 'red';
  errorDiv.innerHTML = '';

  let summaryDiv = document.getElementById('summary');
  summaryDiv.style.color = 'green';
  summaryDiv.innerHTML = '';

  // validar name:
  let name = document.querySelector('[name=name]');
  if (name.value.length > 0 && name.value.length <= 40) {
    validations.push(true);
    let valueMsg = document.createElement('p');
    valueMsg.innerHTML = 'nome: ' + name.value;
    summaryDiv.appendChild(valueMsg);
  } else {
    validations.push(false);
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Nome inválido';
    errorDiv.appendChild(errorMsg);
  }

  //validar email
  let email = document.querySelector('[name=email]');
  if (email.value.length > 0 && email.value.length <= 50) {
    validations.push(true);
    let valueMsg = document.createElement('p');
    valueMsg.innerHTML = 'email: ' + email.value;
    summaryDiv.appendChild(valueMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Email inválido';
    errorDiv.appendChild(errorMsg);
  }

  //validar cpf
  let cpf = document.querySelector('[name=cpf]');
  if (cpf.value.length > 0 && cpf.value.length === 11) {
    validations.push(true);
    let valueMsg = document.createElement('p');
    valueMsg.innerHTML = 'CPF: ' + cpf.value;
    summaryDiv.appendChild(valueMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'CPF inválido';
    errorDiv.appendChild(errorMsg);
  }

  //validar address
  let address = document.querySelector('[name=address]');
  if (address.value.length > 0 && address.value.length <= 200) {
    validations.push(true);
    let valueMsg = document.createElement('p');
    valueMsg.innerHTML = 'Endereço: ' + address.value;
    summaryDiv.appendChild(valueMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Endereço inválido';
    errorDiv.appendChild(errorMsg);
  }

  // validar cidade
  let city = document.querySelector('[name=city]');
  if (city.value.length > 0 && city.value.length <= 28) {
    validations.push(true);
    let valueMsg = document.createElement('p');
    valueMsg.innerHTML = 'Cidade: ' + city.value;
    summaryDiv.appendChild(valueMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Cidade inválido';
    errorDiv.appendChild(errorMsg);
  }

  //validar estados
  let states = document.querySelector('[name=states]');
  let stateMsg = document.createElement('p');
  stateMsg.innerHTML = 'Estado: ' + states.value;
  summaryDiv.appendChild(stateMsg);

  // validar house type
  let houseType = document.querySelector('[name=houseType]:checked');
  if (houseType) {
    validations.push(true);
    let houseMsg = document.createElement('p');
    houseMsg.innerHTML = 'Tipo de casa: ' + houseType.parentElement.innerText;
    summaryDiv.appendChild(houseMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Tipo de casa inválido';
    errorDiv.appendChild(errorMsg);
  }

  //validar resumo
  let resume = document.getElementById('input-resume');
  if (resume.value.length > 0 && resume.value.length <= 1000) {
    validations.push(true);
    let resumeMsg = document.createElement('p');
    resumeMsg.innerHTML = 'Resumo do currículo: ' + resume.value;
    summaryDiv.appendChild(resumeMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Resumo de currículo inválido';
    errorDiv.appendChild(errorMsg);
  }

  // validar occupation
  let occupation = document.querySelector('[name=occupation]');
  if (occupation.value.length > 0 && occupation.value.length <= 40) {
    validations.push(true);
    let resumeMsg = document.createElement('p');
    resumeMsg.innerHTML = 'Cargo: ' + occupation.value;
    summaryDiv.appendChild(resumeMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Cargo inválido';
    errorDiv.appendChild(errorMsg);
  }

  // validar descricao cargo
  let occupationResume = document.querySelector('[name=occupation-resume]');
  if (occupationResume.value.length > 0 && occupationResume.value.length <= 500) {
    validations.push(true);
    let resumeMsg = document.createElement('p');
    resumeMsg.innerHTML = 'Resumo do cargo: ' + occupationResume.value;
    summaryDiv.appendChild(resumeMsg);
  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Resumo do cargo inválido';
    errorDiv.appendChild(errorMsg);
  }

  // validar data inicio
  let startDate = document.querySelector('[name=start-date]');

  if (startDate.value.length === 10) {
    let dia = parseInt(startDate.value.substring(0, 2));
    let mes = parseInt(startDate.value.substring(3, 5));
    let ano = parseInt(startDate.value.substring(6, 10));

    if ((dia > 0 && dia <= 31) && (mes > 0 || mes <= 12) && (ano > 0)) {
      validations.push(true);
      let resumeMsg = document.createElement('p');
      resumeMsg.innerHTML = 'Data de início: ' + startDate.value;
      summaryDiv.appendChild(resumeMsg);
    }

  } else {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = 'Data de início inválido';
    errorDiv.appendChild(errorMsg);
  }
}

let picker = new Pikaday({
  field: document.getElementById('input-start-date'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth();;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

new window.JustValidate('#cv-form', {
  rules: {
    name: {
      required: true,
      minLength: 3
    },
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 48
    },
    state: {
      required: true
    },
    houseType: {
      required: true
    },
    cvResume: {
      required: true,
      maxLength:1000
    },
    occupation:{
      required:true
    },
    occupationResume:{
      required:true,
      maxLength:1000
    },
    startDate:{
      required:true
    }

  },

  focusWrongField: true,

  messages: {
    name: {
      minLength: 'Muito curto',
      required: 'Digite seu nome'
    },
    email: {
      required: 'Digite seu email',
      email: 'Email inválido'
    },
    cpf: {
      required: 'Digite seu CPF',
      minLength: 'CPF inválido',
      maxLength: 'CPF inválido'
    },
    address: {
      maxLength: 'Máximo de 200 caracteres'
    },
    city: {
      required: 'Digite seu CPF',
      maxLength: 'Máximo de 48 caracteres'
    },
    state: {
      required: 'Selecione seu estado'
    },
    houseType: {
      required: 'Selecione um tipo'
    },
    cvResume: {
      required: 'Digite o resumo do seu currículo',
      maxLength:'Máximo de 1000 caracteres'
    },
    occupation:{
      required:'Digite seu Cargo'
    },
    occupationResume:{
      required:'Digite um resumo do seu cargo',
      maxLength:'Máximo de 1000 caracteres'
    },
    startDate:{
      required:'Escolha uma data de início'
    }

  },

});

window.onload = function () {
  statesOptions();
  // let submitButton = document.getElementById('submit-button');
  // submitButton.addEventListener('click', formValidation);


}



