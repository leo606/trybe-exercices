import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      selectInput: '',
      textInput: '',
      textAreaInput: '',
      checkboxInput: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    return (
      <form>
        <label>
          Selecione o número
          <select
            name='selectInput'
            value={this.state.selectInput}
            onChange={this.handleChange}
          >
            <option>um</option>
            <option>dois</option>
            <option>tres</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Estado Favorito
          <input
            type='text'
            name='textInput'
            value={this.state.textInput}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Descrição
          <textarea
            name='textAreaInput'
            value={this.state.textAreaInput}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          <input name='checkboxInput' type='checkbox' onChange={this.handleChange} />
          llaksjdlaksdj
        </label>
      </form>
    );
  }
}

export default Form;
