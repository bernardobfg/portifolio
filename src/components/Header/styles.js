import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 10px 50px;
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid blue;
`

export const ToggleDiv = styled.div`
    cursor:pointer;
    width: 50px;
    height: 25px;
    border-radius: 45%;
    padding: 2px;
    background-color: ${props => props.theme.toggleBg};
    display: flex;
    align-items:center;
    justify-content: ${props => props.themeName !== "light" ? "flex-end" : "flex-start"};
`


