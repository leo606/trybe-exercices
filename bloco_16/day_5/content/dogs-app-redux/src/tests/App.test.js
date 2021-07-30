import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('pagina principal', () => {
  it('testa botao estar presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const btnDog = queryByText('Novo Doguinho');

    expect(btnDog).toBeInTheDocument();
  });

  it('testa requisicao API', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const btnDog = queryByText('Novo Doguinho');

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(btnDog);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
