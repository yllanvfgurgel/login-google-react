import { createGlobalStyle } from 'styled-components';

import backgroundAstro from '../assets/dotgrid.png'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-image: url(${backgroundAstro});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: black;
    }

`