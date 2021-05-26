// function generateEmail(workerName){
//   return workerName.split(' ').join('').toLowerCase();
// }

function workerData(workerName) {
  return {
    nomeCompleto: workerName,
    email: `${workerName.split(' ').join('_').toLowerCase()}@trybe.com`
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees(workerData));