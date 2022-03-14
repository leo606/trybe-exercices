// criamos um array de strings com as unidades de medida
// o tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array
const units: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function throwError(msg: string): void {
  throw new Error(`${msg} is not valid`);
}

function convert(value: number, baseUnit: string, convertUnit: string): number {
  if (!units.includes(baseUnit)) throwError("base unit"); // se a unidade base não for válida lançamos um erro
  if (!units.includes(convertUnit)) throwError("convert unit"); // se a unidade para a conversão não for válida lançamos um erro

  const baseIndex = units.indexOf(baseUnit); // pegamos o index da unidade base no array
  const convertIndex = units.indexOf(convertUnit); // pegamos o index da unidade para a conversão
  const exponent = Math.abs(convertIndex - baseIndex); // calculamos o expoente a partir da diferença dos index

  return value * 10 ** exponent;
}

console.log(convert(1, "kg", "g"));
