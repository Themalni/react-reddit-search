import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components'
import { theme } from '../../utils/theme';
import { Container, LowerContainer, MasonryContainer } from './Container';
import { ThemeProvider } from 'styled-components';

describe('Container', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('LowerContainer', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LowerContainer />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('MasonryContainer', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <MasonryContainer />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})