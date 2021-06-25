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
    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.fileHandle = this.fileHandle.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  fileHandle(event) {
    event.preventDefault();
    alert(`selected file: ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.fileHandle}>
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
        <fieldset>
          <legend>Field Title</legend>
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
        </fieldset>
        <br />
        <br />
        <label>
          <input
            name='checkboxInput'
            type='checkbox'
            onChange={this.handleChange}
          />
          llaksjdlaksdj
        </label>
        <br />
        <br />
        <label>
          <input type='file' ref={this.fileInput} />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
