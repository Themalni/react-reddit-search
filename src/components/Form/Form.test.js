import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { theme } from '../../utils/theme';
import 'jest-styled-components'
import Form from './Form';
import { ThemeProvider } from 'styled-components';

describe('Form', () => {

  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Form></Form>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot();
  })

})