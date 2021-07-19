import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks());

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('input', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'digitest' } });
    expect(input).toHaveValue('digitest');
  });

  it('testa requisicao de digimon', () => {
    const digimon = [
      {
        digimon: {
          name: 'Agumon',
          img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
          level: 'Rookie',
        },
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({ json: async () => digimon });

    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    const btn = getByTestId('buttonSearch');
    userEvent.type(input, 'Agumon');
    userEvent.click(btn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon')
  });
});
