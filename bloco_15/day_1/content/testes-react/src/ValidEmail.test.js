import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('TESTA VALIDEMAIL', () => {
  it('testa email valido', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });

  it('testa email invalido', () => {
    const EMAIL_USER = 'email_invalido';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

});
