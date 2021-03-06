import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='poke-item'>
        <div>
          <h3>{name}</h3>
          <span>Type: {type}</span>
          <br />
          <span>Average Weight: {averageWeight.value}</span>
        </div>
        <img src={image} alt={`${name} ${type}`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
  index: PropTypes.number,
};

export default Pokemon;
