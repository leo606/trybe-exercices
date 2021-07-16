import { render } from '@testing-library/react';
import App from './App';

test('verifica input email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('verifica se existe um botao', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
});
