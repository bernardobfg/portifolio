import styled from 'styled-components';

export const MenuContainer = styled.div`
    align-self: flex-end;
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 300px;
    width: 200px;
    background-color: ${props => props.theme.header};
`

export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 50px;
    height: 22px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${props => props.theme.toggleBg};
    display: flex;
    align-items:center;
    justify-content: ${props => props.themeName !== "light" ? "flex-end" : "flex-start"};
`


