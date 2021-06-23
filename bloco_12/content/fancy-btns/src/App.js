import './App.css';
import React from 'react';

function handleClick() {
  console.log('click');
}

class App extends React.Component {
  render() {
    return <button onClick={handleClick}>BUTTON</button>;
  }
}

export default App;
