import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { theme } from '../../utils/theme';
import 'jest-styled-components'
import H1 from './H1';

describe('H1', () => {

  it("renders correctly", () => {
    const { container } = render(<H1 theme={theme}></H1>)
    expect(container.firstChild).toMatchSnapshot();
  })

})