import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import clickReducer from './reducers';
import { Provider } from 'react-redux';

const mockStore = (init) =>
  createStore(combineReducers({clickReducer}), init, applyMiddleware(thunk));

const renderWithRedux = (comp, { init, store = mockStore(init) } = {}) => {
  return {
    ...render(<Provider store={store}> {comp} </Provider>),
    store,
  };
};

describe('test clicks', () => {
  it('the page should has a button and a text 0', () => {

    const init = { clickReducer: { counter: 3 } };

    const { queryByText } = renderWithRedux(<App />, );
    const btnAdd = queryByText(/clique aqui/i);

    expect(btnAdd).toBeInTheDocument();
    expect(queryByText('3')).toBeInTheDocument();
  });
});
