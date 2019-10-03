import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';
import { theme } from '../../utils/theme';
import Post from './Post';
import { ThemeProvider } from 'styled-components';

afterEach(() => cleanup())

function renderWithRedux(component,
  { initState, store = createStore(rootReducer, initState, applyMiddleware(thunk)) } = {}) {
  return {
    ...render(<Provider store={store}><ThemeProvider theme={theme}>{component}</ThemeProvider></Provider>),
    store
  }
}

describe('Search', () => {

  it("renders correctly", () => {
    const { container } = renderWithRedux(<Post />);
    expect(container.firstChild).toMatchSnapshot();
  })

})