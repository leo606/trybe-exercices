// function userInfo() {
//   const userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// console.log(userEmail);

// }
// userInfo();

// if (true) {
//   // inicio do escopo do if
//   const userAge = "20";
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge, 'fora'); // 20

// let favoriteLanguage = "Javascript";
// favoriteLanguage = "Python";
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = "Machine learning";
// favoriteTechnology = "Facial recognition";
// console.log(favoriteTechnology); // Facial recognition

const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "s"


console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }