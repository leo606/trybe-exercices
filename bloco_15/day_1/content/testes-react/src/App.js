import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    };
  }
  textHandler(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(email) {
    this.setState({ saveEmail: email, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">Email</label>
        <input
          type="email"
          id="id-email"
          value={email}
          onChange={(e) => this.textHandler(e.target.value)}
        />
        <input
          data-testid="id-send"
          id="btn-send"
          type="button"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default App;
