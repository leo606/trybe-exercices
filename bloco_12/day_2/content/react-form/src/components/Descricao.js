import React from 'react';

class Descricao extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Descrição
        <textarea
          name='textAreaInput'
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Descricao;
