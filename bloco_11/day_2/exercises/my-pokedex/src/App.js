import Pokedex from './components/Pokedex';
import pokemons from 'data';
import './App.css';

function App() {
  return (
    <div className='App'>
      {pokemons.map((elem) => (
        <Pokedex pekomon={elem} />
      ))}
    </div>
  );
}

export default App;
