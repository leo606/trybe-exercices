import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokeType: 'Fire',
      pokesOfType: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.pokeTypeHandle = this.pokeTypeHandle.bind(this);
  }

  pokeTypeHandle(type) {
    const { pokemons } = this.props;
    return pokemons.filter((poke) => poke.type === type);
  }

  handleClick(event) {
    if (this.state.pokemonIndex < this.props.pokemons.length - 1) {
      this.setState((currState, _props) => ({
        pokemonIndex: currState.pokemonIndex + 1,
      }));
    }
  }

  render() {
    const { pokeType } = this.state;
    return (
      <div>
        {this.pokeTypeHandle(pokeType).map((elem, index) => (
          <Pokemon key={index} pokemon={elem} />
        ))}
        <button onClick={(event) => this.handleClick(event)}>Pokemon</button>
        <Button clicLis={() => this.pokeTypeHandle('Fire')} btnText='Fire' />
        <Button
          clicLis={() => this.pokeTypeHandle('Psychic')}
          btnText='Psychic'
        />
      </div>
    );
  }
}

export default Pokedex;
