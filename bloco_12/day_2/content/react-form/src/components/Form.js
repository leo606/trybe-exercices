import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      selectInput: '',
      textInput: '',
      textAreaInput: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({ textInput: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ selectInput: event.target.value });
  }

  handleTextAreaChange(event) {
    this.setState({ textAreaInput: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Selecione o número
          <select
            name='selectInput'
            value={this.state.selectInput}
            onChange={this.handleSelectChange}
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
            onChange={this.handleTextChange}
          />
        </label>
        <br />
        <br />
        <label>
          Descrição
          <textarea
            name='textAreaInput'
            value={this.state.textAreaInput}
            onChange={this.handleTextAreaChange}
          />
        </label>
      </form>
    );
  }
}

export default Form;
