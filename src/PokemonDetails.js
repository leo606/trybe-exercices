import React from 'react';

class PokemonDetails extends React.Component {
  render(){
    const {name, type, averageWeight, summary, foundAt} = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h4>{type}</h4>
        <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <p>{summary}</p>

        {foundAt.map(({location, map}) => (
            <div key={location}>
              <h4>{location}</h4>
              <img src={map} alt={location} />
            </div>
          ))}
      </div>
    )
  }
}

export default PokemonDetails;