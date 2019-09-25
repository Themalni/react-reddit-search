import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
    color: white;
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.colors.grey};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  </ThemeProvider>
);

export default Layout;