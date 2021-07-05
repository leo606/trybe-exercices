import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';
import About from './About';
import NotFound from './NotFound';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" render={(props) => <Pokedex pokemons={pokemons} />} />
      <Route component={NotFound}/>
    </BrowserRouter>
  );
}

export default App;
