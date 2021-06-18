const textJSX = 'Hello World';
const element = <span>{textJSX}</span>;

function helloWorld(classe) {
  return <h1 className={classe}>{element}</h1>;
}
