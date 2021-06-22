import pokemons from './data';
import Pokedex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <div>
      {/* <Pokedex pokemon={pokemons[0]} /> */}
      {pokemons.map((elem) => (
        <Pokedex pokemon={elem} />
      ))}
    </div>
  );
}

export default App;
