import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log(this.props.pokemons.length);
    if (this.state.pokemonIndex < this.props.pokemons.length - 1) {
      this.setState((currState, _props) => ({
        pokemonIndex: currState.pokemonIndex + 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <Pokemon pokemon={this.props.pokemons[this.state.pokemonIndex]} />
        <button onClick={(event) => this.handleClick(event)}>Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;
