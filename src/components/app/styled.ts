import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  
  body {
    font-family: ${({theme}) => theme.font.fontFamily}, 'Arial', sans-serif;
    font-size: ${({theme}) => theme.font.fontSize};
    line-height: ${({theme}) => theme.font.lineHeight};
    font-weight: ${({theme}) => theme.font.fontWeight};
  }  
  
`;
