import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';
import { theme } from '../../utils/theme';
import Search from './Search';
import { InputText } from '../Input/Input';
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
    const { container } = renderWithRedux(<Search></Search>);
    expect(container.firstChild).toMatchSnapshot();
  })

  it("calls handleSubmit when Search button is clicked ", () => {
    const handleSubmitMock = jest.fn();

    const { getByText } = renderWithRedux(
      <Search onSubmit={handleSubmitMock()}></Search>
    )

    fireEvent.click(getByText(/Search/i))

    expect(handleSubmitMock).toHaveBeenCalledTimes(1)
  })

  it("calls onChange when input value changes", () => {
    const onChangeMock = jest.fn();
    const searchTerm = "books";

    const { getByPlaceholderText } = renderWithRedux(
      <Search>
        <InputText type="text" placeholder="Enter search term..." onChange={onChangeMock()} />
      </Search>
    )
    const input = getByPlaceholderText("Enter search term...");

    fireEvent.change(input, {
      target: { value: searchTerm },
    })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(input.value).toBe(searchTerm)
  })

})