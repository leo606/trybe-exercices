import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('TELA DE INSERÇÃO DE EMAIL', () => {
  it('verifica input email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('verifica se existe um botao', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.value).toBe('Enviar');
  });

  it('verifica se existe dois botoes', () => {
    const { getAllByRole } = render(<App />);
    const btn = getAllByRole('button');
    expect(btn.length).toBe(2);
  });

  it('verifica se o botao e campo email estao funcionando', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const EMAIL_USER = 'email@email.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, {target: {value: EMAIL_USER}});
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
