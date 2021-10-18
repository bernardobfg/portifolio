import styled from 'styled-components';

export const MenuContainer = styled.div`
    align-self: flex-end;
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    width: 200px;
    position: fixed;
    z-index: 9;
    background-color: #202225;//${props => props.theme.auxiliar};
    @media(min-width: 850px){
        display:none;
    }
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    @media(min-width: 1000px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.1em;
    margin: 15px 0;
    margin-top: ${props => props.selected? "5px": null};
    
    
`

export const Link = styled.a`
    cursor: pointer;
    color: #fff;//${props => props.theme.text};
    &:hover{
        opacity: 0.5;
    }
`