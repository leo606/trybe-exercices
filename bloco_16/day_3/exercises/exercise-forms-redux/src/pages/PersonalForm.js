import React from 'react';

class PersonalForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input id="name-input" type="text" />
        </label>

        <label htmlFor="email-input">
          Email
          <input type="email" id="email-input" />
        </label>

        <label htmlFor="cpf-input">
          CPF
          <input id="cpf-input" type="text" />
        </label>
      </form>
    );
  }
}

export default PersonalForm;
