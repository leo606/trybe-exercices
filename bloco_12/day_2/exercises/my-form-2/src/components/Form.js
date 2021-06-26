import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import states from '../data/states_data';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      emailInput: '',
      CPFInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler({ target }, max) {
    let { name, value } = target;
    if (name === 'nameInput') {
      if (value.length > max) return;
      const nameUpper = value.toUpperCase();
      this.setState({ [name]: nameUpper });
      return;
    }

    if (name === 'emailInput') {
      if (value.length > max) return;
      this.setState({ [name]: value });
      return;
    }

    if (name === 'CPFInput') {
      if (value.length > max) return;
      this.setState({ [name]: value });
      return;
    }

    if (name === 'addressInput') {
      if (value.length > max) return;
      if (/^[a-zA-Z0-9]*$/.test(value) === false) return; // source: https://www.codexworld.com/how-to/check-special-characters-using-javascript/
      this.setState({ [name]: value });
      return;
    }

    if (name === 'cityInput') {
      if (value.length > max) return;
      this.setState({ [name]: value });
      return;
    }
  }

  render() {
    return (
      <form className='form'>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <InputText
            labelText='Nome:'
            name={'nameInput'}
            toUpper={true}
            value={this.state.nameInput}
            max={3}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Email:'
            name={'emailInput'}
            value={this.state.emailInput}
            max={50}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='CPF:'
            name={'CPFInput'}
            value={this.state.CPFInput}
            max={11}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Endereço:'
            name={'addressInput'}
            value={this.state.addressInput}
            max={200}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Cidade:'
            name={'cityInput'}
            value={this.state.cityInput}
            max={28}
            onChange={this.textInputHandler}
          />

          <InputSelect
            labelText='Estado:'
            name={'stateInput'}
            value={this.state.stateInput}
            onChange={this.textInputHandler}
            options={states}
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
