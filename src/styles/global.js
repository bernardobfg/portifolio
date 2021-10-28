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
    .react-modal-overlay {
        z-index: 99999;
        background-color: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .react-modal-content {
        width: 100%;
        max-width: 800px;
        min-height: 400px;
        padding: 20px 30px;
        background-color: ${props => props.theme.auxiliar};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media(max-width: 768px){
            max-width: 80vw;
            padding: 20px;
        }
    }
`