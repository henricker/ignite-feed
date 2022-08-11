import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #121214;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Roboto', sans-serif;
    }

    @media screen and (max-width: 670px) {
        html {
            font-size: 87.5%;
        }
    }
`;

export default GlobalStyle;
