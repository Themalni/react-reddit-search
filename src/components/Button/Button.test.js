import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components'
import { theme } from '../../utils/theme';
import { Button, WideButton, LinkButton } from './Button';
import { ThemeProvider } from 'styled-components';

describe('Container', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('LowerContainer', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <WideButton />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('MasonryContainer', () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LinkButton />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})