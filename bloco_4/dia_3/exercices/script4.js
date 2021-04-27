let size = 5;
let symbol = '*';
outputLine = '';
inputPosition = size;

for (let indexLine = 0; indexLine < size; indexLine += 1){
  for (let indexColumn = 0; indexColumn <= size; indexColumn += 1){
    if (indexColumn < inputPosition){
      outputLine = outputLine + ' ';
    }else{
      outputLine = outputLine + symbol;
    };
  };
  console.log(outputLine);
  inputPosition -= 1;
  outputLine = '';
};
