import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';

const GlobalStyles = createGlobalStyle`
    ${reset};

    html, body {
        box-sizing: border-box;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        font-size: 16px;
    }
`;

export default GlobalStyles;
