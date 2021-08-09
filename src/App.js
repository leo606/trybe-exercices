import React from 'react';
import MyContext from './contextAPI/MyContext';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
      signal: 'red',
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState(() => ({ [car]: side }));
  }

  changeSignal(color) {
    this.setState({ signal: color });
  }

  render() {
    const providerValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };
    return (
      <MyContext.Provider value={providerValue} >
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}

export default App;
