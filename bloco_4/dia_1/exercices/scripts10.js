let custoProduto = -9;
let valorVenda = 10;
let imposto = 0.2;

let lucroMilUnidades = (valorVenda - (custoProduto + (custoProduto * imposto))) * 1000;

if (custoProduto < 0 || valorVenda < 0 || imposto < 0) {
    console.log('erro - valor menor q 0')
}else {
    console.log(lucroMilUnidades)
}