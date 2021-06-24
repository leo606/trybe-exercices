import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount1: 0,
      clickCount2: 0,
      clickCount3: 0,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState((curr, _props) => ({ clickCount1: curr.clickCount1 + 1 }));
  }

  handleClick2() {
    this.setState((curr, _props) => ({ clickCount2: curr.clickCount2 + 1 }));
  }

  handleClick3() {
    this.setState((curr, _props) => ({ clickCount3: curr.clickCount3 + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.clickCount1}</button>
        <button onClick={this.handleClick2}>{this.state.clickCount2}</button>
        <button onClick={this.handleClick3}>{this.state.clickCount3}</button>
      </div>
    );
  }
}

export default App;
