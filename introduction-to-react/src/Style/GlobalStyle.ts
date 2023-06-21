import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: #212922;
        padding: 0 0 20px 0;
        color: #000;
        font-family: 'Roboto', sans-serif;

        > #root {
            width: 100%;
            height: 100%;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: normal;
    }

    a {
        &,
        :hover,
        :focus,
        :visited {
            color: #000;
            text-decoration: none;
        }
    }

    button {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-radius: 0;

        :hover,
        :focus {
            border: none;
            outline: none;
        }
    }

    li {
        list-style: none;
    }
`;
