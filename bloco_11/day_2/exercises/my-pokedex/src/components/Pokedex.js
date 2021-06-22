import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    return <Pokemon pokemon={this.props.pokemon} index={this.props.index}/>;
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Pokedex;
