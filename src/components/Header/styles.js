import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 10px 0;
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //border-bottom: 1px solid ${props => props.theme.toggleBg};
    background-color: ${props => props.theme.header};
`

export const MenuArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    //background-color: ${props => props.theme.header};
`

export const Menu = styled.div`
    display: ${props =>props.open? "none": "none"};
    flex-direction: column;
    height: 300px;
    width: 200px;
`

export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 45%;
    padding: 2px;
    background-color: ${props => props.theme.toggleBg};
    display: flex;
    align-items:center;
    justify-content: ${props => props.themeName !== "light" ? "flex-end" : "flex-start"};
`

export const Lines = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const Line1 = styled.div`
    margin: 3px 15px;
    width:35px;
    height: 2px;
    transform: rotateZ(${props => props.open ? "45deg" : "0deg" });
    margin: ${props => props.open? "0 15px": "3px 15px"};
    transition: transform .5s, margin .5s;
    background-color: ${props => props.theme.text};
`
export const Line2 = styled.div`
    margin: 3px 15px;
    width:35px;
    height: 2px;
    opacity: ${props => props.open ? "0" : "1"};
    display: ${props => props.open ? "none" : "flex"};
    transition: opacity .5s;
    background-color: ${props => props.theme.text};
`
export const Line3 = styled.div`
    
    width:35px;
    height: 2px;
    transform: rotateZ(${props => props.open ? "-45deg" : "0deg" });
    margin: ${props => props.open? "0 15px": "3px 15px"};
    transition: transform .5s, margin .5s;
    background-color: ${props => props.theme.text};
`

