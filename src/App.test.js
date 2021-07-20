import React from 'react';
import App from './App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('test App', () => {
  it('testa rederização do app', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    const home = getByText(/home/i);
    const img = getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://github.com/leo606.png');
    expect(img.alt).toBe('leonardo');
    expect(home).toBeInTheDocument();
  });

  it('clique em cada rota renderiza os textos esperados', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    const sobreLink = getByRole('link', { name: 'Sobre' });
    const contatoLink = getByRole('link', { name: 'Contato' });
    const projetosLink = getByRole('link', { name: 'Projetos' });

    userEvent.click(sobreLink);
    expect(history.location.pathname).toBe('/about');
    const aboutText = getByText(/about/i);
    expect(aboutText).toBeInTheDocument();

    userEvent.click(contatoLink);
    expect(history.location.pathname).toBe('/contact');
    const contactText = getByText(/contact/i);
    expect(contactText).toBeInTheDocument();
    expect(aboutText).not.toBeInTheDocument();

    userEvent.click(projetosLink);
    expect(history.location.pathname).toBe('/projects');
    const projectsText = getByText(/projects/i);
    expect(projectsText).toBeInTheDocument();
    expect(contactText).not.toBeInTheDocument();
  });
});
