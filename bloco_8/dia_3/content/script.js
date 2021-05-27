const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let productsPrices = products.map( (element, index)=> {
  return{
    [element]: prices[index]
  }
})

console.log(productsPrices);