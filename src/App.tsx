import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {


  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
