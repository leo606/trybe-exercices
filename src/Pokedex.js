import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokeType: 'Fire',
    };
    this.handleClick = this.handleClick.bind(this);
    this.pokeTypeHandle = this.pokeTypeHandle.bind(this);
  }

  pokeTypeHandle(type) {
    if (this.state.pokeType !== type) this.setState({ pokeType: type });
    const { pokemons } = this.props;
    return pokemons.filter((poke) => poke.type === type);
  }

  handleClick(arrayLength) {
    if (this.state.pokemonIndex < arrayLength - 1) {
      this.setState((currState, _props) => ({
        pokemonIndex: currState.pokemonIndex + 1,
      }));
    }
  }

  render() {
    const pokesOfType = this.pokeTypeHandle(this.state.pokeType);
    const pokesTypes = this.props.pokemons.map((elem) => elem.type);

    return (
      <div>
        <Pokemon pokemon={pokesOfType[this.state.pokemonIndex]} />
        {pokesTypes.map((elem) => (
          <Button clicLis={() => this.pokeTypeHandle(elem)} btnText={elem} />
        ))}
        <br />

        <button onClick={(event) => this.handleClick(pokesOfType.length)}>
          Next Pokemon
        </button>
      </div>
    );
  }
}

export default Pokedex;
