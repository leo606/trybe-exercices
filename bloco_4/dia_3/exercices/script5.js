let size = 5;
let symbol = '*';
let outputLine = '';
let starPrintPosition = size;

for (let lineIndex = 0; lineIndex < size; lineIndex += 1){
  for (let columnIndex = 0; columnIndex <= size; columnIndex += 1){
    if(columnIndex < starPrintPosition){
      outputLine = outputLine + ' ';
    }else{
      outputLine = outputLine + symbol;
    }
  };
  console.log(outputLine);
  starPrintPosition -= 1;
  outputLine = '';
};
