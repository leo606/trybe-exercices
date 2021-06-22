import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section className='pokedex-section'>
        <h1 className='pokedex-title'>Pokedex</h1>
        {pokemons.map((elem) => (
          <Pokemon key={elem.id} pokemon={elem} />
        ))}
      </section>
    );
  }
}

export default Pokedex;
