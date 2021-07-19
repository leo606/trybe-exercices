import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  beforeEach(() => render(<App />));
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const btn = screen.getByRole('button');
    expect(btn.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    // const { getByLabelText, queryByText } = render(<App />);
    // const tarefa = 'tarefaTest';
    const inputTarefa = screen.getByLabelText('Tarefa:');
    expect(inputTarefa).toBeInTheDocument();
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    const textnot = screen.queryByText('tarefaTest');
    expect(textnot).not.toBeInTheDocument();


    fireEvent.change(inputTarefa, { target: { value: 'tarefaTest' } });
    fireEvent.click(btn);

    const text = screen.getByText('tarefaTest');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('tarefaTest');

  });
});
