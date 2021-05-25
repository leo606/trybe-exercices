// function generateEmail(workerName){
//   return workerName.split(' ').join('').toLowerCase();
// }

function workerData(workerName){
  return{
    nomeCompleto: workerName,
    email: `${workerName.split(' ').join('').toLowerCase()}@trybe.com`
  };
}

const newEmployees = () => {
  const employees = {
    id1: workerData('Pedro Guerra'),
    id2: workerData('Luiza Drummond'),
    id3: workerData('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees());