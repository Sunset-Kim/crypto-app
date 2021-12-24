import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient,QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import GlobalHeader from './components/GlobalHeader';


const queryClient = new QueryClient();

function App() {
  const isDark = useRecoilValue(isDarkAtom);
    return (
    <QueryClientProvider client={queryClient}>
      
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalHeader />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
    
  );
}

export default App;
