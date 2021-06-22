import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='poke-item'>
        <h3>{name}</h3>
        <span>{type}</span>
        <span>Average Weight: {averageWeight.value}</span>
        <img src={image} alt={`${name} ${type}`} />
      </div>
    );
  }
}

export default Pokemon;
