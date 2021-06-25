import React from 'react';

class FavState extends React.Component {
  render() {
    const { handleChange, value, handleError } = this.props;
    const error = value.length > 9 ? 'Maior q 9' : false;
    if (error) handleError(error);

    return (
      <label>
        Estado Favorito
        <input
          type='text'
          name='textInput'
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default FavState;
