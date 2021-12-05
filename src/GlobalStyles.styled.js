import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
  --heading-color: #444;
  --text-color: #999;
  --primary-color: #8d69f1;
  --highlight-color: #d13267;
  --bg-color: #f4f4f4;
}

  body {
    font-family: Poppins, sans-serif;
    margin: 0;
    font-size: 1.1em;
    background: var(--bg-color);
  }

  ul, li, p, h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  .error {
    color: red;
    background: pink;
    border: 1px solid red;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0;
  }
`;

export default GlobalStyle;
