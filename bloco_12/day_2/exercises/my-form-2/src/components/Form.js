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

  textInputHandler({ target }) {
    let { name, value } = target;
    if (name === 'nameInput') {
      if (value.length > 40) return;
      const nameUpper = value.toUpperCase();
      this.setState({ [name]: nameUpper });
      return;
    }

    if (name === 'emailInput'){
      if (value.length > 50) return;
      this.setState({ [name]: value });
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
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Email:'
            name={'emailInput'}
            value={this.state.emailInput}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='CPF:'
            name={'CPFInput'}
            value={this.state.CPFInput}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Endereço:'
            name={'addressInput'}
            value={this.state.addressInput}
            onChange={this.textInputHandler}
          />

          <InputText
            labelText='Cidade:'
            name={'cityInput'}
            value={this.state.cityInput}
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
