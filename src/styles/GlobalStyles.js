import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --text-gray-main: #2d2e32;
    --text-gray-secondary: #2d2e32;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    font-family: Poppins, Helvetica, sans-serif;
    color: var(--text-gray-main);
    line-height: 1.5;
    font-size: 1.6rem;
}

button {
    cursor: pointer;
}

input, button, textarea {
    font: inherit;
    color: inherit;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

p {
    color: #50554d;
}

h2 {
    color: #798b0fd9;
  }

section {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export default GlobalStyles;
