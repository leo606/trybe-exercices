import './App.css';
import React from 'react';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    return (
      <button onClick={this.handleClick}>Hello World!</button>
    );
  }
}

export default App;
