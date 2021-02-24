import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: #f2f2f2;
    color: #333;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font: inherit;
  }

  button {
    display: inline-block;
    border: none;
    font: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;