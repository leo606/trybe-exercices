// Agora inverta o lado do triângulo.

let size = 5;
let symbol = '*';
let outputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex < size; lineIndex += 1){
  for (let columIndex = 0; columIndex <= size; columIndex += 1){
    if (columIndex < inputPosition){
      outputLine = outputLine + ' ';
    }else{
      outputLine = outputLine + symbol;
    };
  };
  console.log(outputLine);
  outputLine = '';
  inputPosition -= 1;
};
