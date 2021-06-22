import pokemons from './data';
import Pokedex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <section className = 'pokes-section'>
      {pokemons.map((elem) => (
        <Pokedex pokemon={elem} />
      ))}
    </section>
  );
}

export default App;
