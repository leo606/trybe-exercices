import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={ Header } />
      <Route path='/' render={(props)=> <Pokedex pokemons={pokemons} />} />
    </BrowserRouter>
  );
}

export default App;