const product = {
  name: "Smart TV Crystal UHD",
  price: 1899.05,
  seller: "Casas de Minas",
};

function printInfos({ name, price, seller }) {
  console.log(`O preço da ${name} na loja ${seller} é de R$ ${price}`);
}

printInfos(product);
