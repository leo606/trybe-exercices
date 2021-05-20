const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros,
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurno(obj, key, value){
  obj[key] = value;
};
addTurno(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(obj){
  Object.keys(obj).forEach(key => console.log(key));
}
// listKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.

function objLenght(obj) {
  console.log(`O tamanho do objeto é ${Object.keys(obj).length}`);
}
objLenght(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign .
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
// Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// console.log(allLessons);
// /*
// {
//   lesson1:
//    { materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã' },
//   lesson2:
//    { materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'noite' },
//   lesson3:
//    { materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite' }
// };
// */