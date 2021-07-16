import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByRole, getAllByRole } = render(<App />) // Caso precise de uma nova query adicione no object destructuring

    const input = getByLabelText('Tarefa:');
    const btn = getByRole('button');

    listTodo.forEach((task)=> {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(btn);
    });
    
    const lis = getAllByRole('listitem');
    expect(lis.length).toBe(listTodo.length);
    expect(lis[1]).toHaveTextContent(listTodo[1]);
    
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content='uiui' />)

    const textElement = getByText('uiui');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('uiui');

  })
})
