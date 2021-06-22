import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        text-decoration: none;
        border: none;
        font-family: "Roboto", sans-serif;
    };
    
    ul{
        list-style: none;
    }
    html {
        scroll-behavior: smooth;
    }
`