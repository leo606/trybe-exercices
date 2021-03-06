// criar uma função que exiba as habilidades do objeto student . 
// Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade"

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};


const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function printObj(obj) {
  const keys = Object.keys(obj);
  for (let index in keys){
    console.log(`${keys[index]}: Nivel ${obj[keys[index]]}`);
  }
}
console.log('student1===')
printObj(student1);

console.log();
console.log();

console.log('student2===')
printObj(student2);

const printValue = (obj) => Object.values(obj);

console.log('-----------------')

console.log(printValue(student2));
