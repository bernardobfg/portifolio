import styled from 'styled-components';
import HamburgerMenu from "react-hamburger-menu";
export const HeaderContainer = styled.header`
    padding: 10px 0;
    max-width: 100vw;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #202225;
    position: fixed;
    z-index: 10;
    top: 0;
    
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    color: #fff;
    margin-left: 50px;
    @media(max-width: 850px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 15px;
    margin-top: ${props => props.selected ? "5px" : null};
    
    
`

export const HamburgerBtn = styled(HamburgerMenu)`
    display: block;
    margin-left:  30px;
    cursor: pointer;
    @media(min-width: 850px){
        display:none;
    }
`

export const Link = styled.a`
    cursor: pointer;
    color: #fff;

    display: inline-block;
    padding-bottom:4px;
    background-image: linear-gradient(${props => props.theme.primary}, ${props => props.theme.primary});
    background-position: 0 100%; 
    background-size: 0% 4px;
    background-repeat: no-repeat;
    transition:
    background-size .7s,
    background-position 0s .7s; 
    
    &:hover {
        background-position: 100% 100%;
        background-size: 100% 2px;
    }
`