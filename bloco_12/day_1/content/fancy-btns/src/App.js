import './App.css';
import React from 'react';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    console.log(this);
    console.log('Clicou');
  };

  render() {
    return <button onClick={this.handleClick}>Hello World!</button>;
  }
}

export default App;
