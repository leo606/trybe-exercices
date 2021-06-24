import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((curr, _props) => ({ clickCount: curr.clickCount + 1 }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.clickCount}</button>;
  }
}

export default App;
