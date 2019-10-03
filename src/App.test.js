import React from 'react';
import { createStore } from 'redux';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { initState } from './reducers/postsReducer';
import { FETCH_POSTS, POSTS_FOUND_CHANGE_STATE, IS_LOADING_CHANGE_STATE, POSTS_NOT_FOUND_CHANGE_STATE } from './actions/types';
import App from './App';
import Layout from './components/Layout/Layout';
import H2 from './components/H2/H2';
import Search from './components/Search/Search';
import { theme } from './utils/theme';
import { ThemeProvider } from 'styled-components';


function renderWithRedux(component,
  { initState, store = createStore(rootReducer, initState) } = {}) {
  return {
    ...render(<Provider store={store}><ThemeProvider theme={theme}>{component}</ThemeProvider></Provider>),
    store
  }
}

describe('App', () => {
  it('renders correctly', () => {
    const { container } = renderWithRedux(<App />);
    expect(container.firstChild).toMatchSnapshot();
  })
})