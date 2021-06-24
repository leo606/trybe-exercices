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

  handleClick() {
    this.setState((currState, _props) => ({
      pokemonIndex: currState.pokemonIndex + 1,
    }));
  }

  render() {
    return (
      <div>
        <Pokemon pokemon={this.props.pokemons[this.state.pokemonIndex]} />
        <button onClick={this.handleClick}>Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;
