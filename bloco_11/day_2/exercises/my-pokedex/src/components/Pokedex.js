import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        <Pokemon poke={this.props.pekomon} />
      </section>
    );
  }
}

export default Pokedex;
