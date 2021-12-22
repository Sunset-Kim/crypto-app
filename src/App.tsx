import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient,QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
      
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
    
  );
}

export default App;
