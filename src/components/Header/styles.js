import styled from 'styled-components';
import HamburgerMenu from "react-hamburger-menu";
export const HeaderContainer = styled.header`
    padding: 10px 0;
    max-width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.auxiliar};
    
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    color: ${props => props.theme.text};
    margin-left: 50px;
    @media(max-width: 850px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 15px;
    margin-top: ${props => props.selected? "5px": null};
    
    
`

export const HamburgerBtn = styled(HamburgerMenu)`
    display: block;
    margin-left: ${props => props.isOpen ? "90px": "30px"};
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
    @media(max-width: 850px){
        display: none;
    }
`

export const Link = styled.a`
    cursor: pointer;
    color: ${props => props.theme.text};
    &:hover{
        border-bottom: 3px solid ${props => props.theme.primary};
    }
`