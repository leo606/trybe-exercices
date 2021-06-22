import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        <Pokemon pokemon={this.props.pokemon} />
      </section>
    );
  }
}

export default Pokedex;
