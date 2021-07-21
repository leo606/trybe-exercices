import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('teste da aplicação toda', () => {
  test('deve rederizar o componente App', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/i);
    expect(home).toBeInTheDocument();
    userEvent.click(getByText(/Sobre/i));
    expect(history.location.pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });
});
