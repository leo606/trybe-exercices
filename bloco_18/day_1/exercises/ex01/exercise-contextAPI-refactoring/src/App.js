import React from 'react';
import MyContext from './contextAPI/MyContext';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({ [car]: side }));
  }

  render() {
    const contextValue = {
      moveCar: this.moveCar,
      ...this.state,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
