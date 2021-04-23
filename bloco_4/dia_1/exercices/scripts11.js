let salarioBruto = 3000.00;
let aliquotaInss = 0;
let salarioBase = 0;
let aliquotaIr = 0;
let parcelaDeduzir = 0;

// CALCULAR ALIQUOTA INSS E SALARIO BASE
if (salarioBruto > 0 && salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08;
    salarioBase = salarioBruto - aliquotaInss;
}else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09;
    salarioBase = salarioBruto - aliquotaInss;
}else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    aliquotaInss = salarioBruto * 0.11;
    salarioBase = salarioBruto - aliquotaInss;
}else {
    aliquotaInss = 570.88;
    salarioBase = salarioBruto - aliquotaInss;
}

// CALCULAR IMPOSTO DE RENDA
if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    aliquotaIr = salarioBase * 0.075;
    parcelaDeduzir = 142.80;
}else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    aliquotaIr = salarioBase * 0.15;
    parcelaDeduzir = 354,80;
}else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    aliquotaIr = salarioBase * 0.225;
    parcelaDeduzir = 636,13;
}else {
    aliquotaIr = salarioBase * 0.275;
    parcelaDeduzir = 869.36;
}

let salarioLiquido = salarioBase - (aliquotaIr - parcelaDeduzir);
console.log(salarioLiquido);