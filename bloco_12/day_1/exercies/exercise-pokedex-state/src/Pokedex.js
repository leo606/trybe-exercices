import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokeType: 'Electric',
    };
    this.handleClick = this.handleClick.bind(this);
    this.pokeTypeHandle = this.pokeTypeHandle.bind(this);
  }

  pokeTypeHandle(type) {
    if (this.state.pokeType !== type) this.setState({ pokeType: type });
    const { pokemons } = this.props;
    return pokemons.filter((poke) => poke.type === type);
  }

  handleClick(arrayLength, prev) {
    const { pokemonIndex } = this.state;
    console.log(pokemonIndex);
    if (prev && pokemonIndex > 0) {
      this.setState((currState, _props) => ({
        pokemonIndex: currState.pokemonIndex - 1,
      }));
    } else if (pokemonIndex < arrayLength - 1) {
      this.setState((currState, _props) => ({
        pokemonIndex: prev
          ? currState.pokemonIndex - 1
          : currState.pokemonIndex + 1,
      }));
    }
  }

  render() {
    const pokesOfType = this.pokeTypeHandle(this.state.pokeType);
    const pokesTypes = this.props.pokemons
      .map((elem) => elem.type)
      .filter((elem, index, array) => index === array.indexOf(elem)); // source: https://stackoverflow.com/questions/16747798/delete-duplicate-elements-from-an-array

    return (
      <div>
        <Pokemon pokemon={pokesOfType[this.state.pokemonIndex]} />
        {pokesTypes.map((elem) => (
          <Button
            key={elem}
            clicLis={() => this.pokeTypeHandle(elem)}
            btnText={elem}
          />
        ))}
        <br />
        <button onClick={(event) => this.handleClick(pokesOfType.length, true)}>
          Previous Pokemon
        </button>

        <button onClick={(event) => this.handleClick(pokesOfType.length)}>
          Next Pokemon
        </button>
      </div>
    );
  }
}

export default Pokedex;
