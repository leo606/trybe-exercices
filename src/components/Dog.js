import React from 'react';
import PropTypes from 'prop-types';
// import fetchDog from '../services/fetchDog';

class Dog extends React.Component {
  render() {
    const { dogURL, value, onChange } = this.props;
    return (
      <div>
        <img src={ dogURL } alt="dog" />
        <label htmlFor="dog-name-input">
          <input
            id="dog-name-input"
            name="dogNameInput"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Dog.propTypes = {
  dogURL: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dog;
