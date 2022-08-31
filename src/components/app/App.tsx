import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/default';
import Certificates from '../blocks/certificates/certificates';
import { GlobalStyles } from './styled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Normalize />
      <main>
        <Certificates />
      </main>
    </ThemeProvider>
  );
};

export default App;
