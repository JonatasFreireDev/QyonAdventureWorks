import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html, #root{
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong, label{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }
  
  a, a:active, a:hover{
    text-decoration: none;
    color: black;
  }
`;