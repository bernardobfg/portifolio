import styled from 'styled-components';

export const MenuContainer = styled.div`
    align-self: flex-end;
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 300px;
    width: 200px;
    position: absolute;
    background-color: ${props => props.theme.auxiliar};
    @media(min-width: 1000px){
        display:none;
    }
`

export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 50px;
    height: 22px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${props => props.theme.primary};
    display: flex;
    align-items:center;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: ${props => props.themeName === "light" ? "5%" : "95%"} 50%;
    //justify-content: ${props => props.themeName !== "light" ? "flex-end" : "flex-start"};
`
export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    color: ${props => props.theme.text};
    @media(min-width: 1000px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.2em;
    margin: 15px 0;
    margin-top: ${props => props.selected? "5px": null};
    
    
`

export const Link = styled.a`
    cursor: pointer;
    color: ${props => props.theme.text};
    &:hover{
        opacity: 0.5;
    }
`