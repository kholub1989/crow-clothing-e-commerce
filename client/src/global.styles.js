import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
  }

  a {
    text-decoration: none;
    color: black
  }

  * {
    box-sizing: border-box;
  }
`;
