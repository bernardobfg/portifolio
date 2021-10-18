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
    //border-bottom: 1px solid ${props => props.theme.primary};
    background-color: #202225;//${props => props.theme.auxiliar};
    position: fixed;
    z-index: 10;
    top: 0;
    
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    color: #fff;//${props => props.theme.text};
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


export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 40px;
    height: 18px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${props => props.theme.primary};
    display: flex;
    margin-right: 50px;
    align-items:center;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: ${props => props.themeName === "light" ? "5%" : "95%"} 50%;
`

export const Link = styled.a`
    cursor: pointer;
    color: #fff;//${props => props.theme.text};

    display: inline-block;
    padding-bottom:4px;
    background-image: linear-gradient(${props => props.theme.primary}, ${props => props.theme.primary});
    background-position: 0 100%; /*OR bottom left*/
    background-size: 0% 4px;
    background-repeat: no-repeat;
    transition:
    background-size .7s,
    background-position 0s .7s; /*change after the size immediately*/
    
    &:hover {
        background-position: 100% 100%; /*OR bottom right*/
        background-size: 100% 2px;
    }
`