// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TicTacToeProvider from './context/TicTacToeProvider';

ReactDOM.render(
  <TicTacToeProvider>
    <App />
  </TicTacToeProvider>,
  document.getElementById('root')
);
