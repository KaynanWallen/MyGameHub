import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: black;
    }
    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        list-style: none;
    }
`

export const ColorsThema = {
    colors: {
        white: "#FFFFFF",
        white20: "rgba(217, 217, 217, 0.15);",
        white50: "rgba(255, 255, 255, 0.5);",
        red: "#F55859",
        blue: "#0F81EC",
    }

}