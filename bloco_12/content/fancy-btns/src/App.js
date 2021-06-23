import './App.css';
import React from 'react';

function handleClick1() {
  console.log('click1');
}

function handleClick2() {
  console.log('click2');
}

function handleClick3() {
  console.log('click3');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>BUTTON1</button>
        <button onClick={handleClick2}>BUTTON2</button>
        <button onClick={handleClick3}>BUTTON3</button>
      </div>
    );
  }
}

export default App;
