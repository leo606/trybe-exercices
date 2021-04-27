let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Chistmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

// console.log('Bem vinda, ' + info.personagem);
// console.log(info);

// // mostrar chaves:
// for (index in info){
//   console.log(index);
// };

// // mostrar valores das chaves:

// for (index in info){
//   console.log(info[index]);
// }

// imprimir os dois objetos juntos de acordo com as chaves:

for (index in info){
  if (info[index] === info.recorrente){
    if (info[index] === info2[index]){
      console.log('Ambos são recorrentes');
    }else{
      console.log(info[index] + ' e ' + info2[index]);
    }
  }else{
    console.log(info[index], info2[index]);
  };
};