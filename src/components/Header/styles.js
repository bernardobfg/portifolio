import styled from 'styled-components';

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
    @media(max-width: 1000px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 15px;
    margin-top: ${props => props.selected? "5px": null};
    
    
`

export const Lines = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    cursor: pointer;
    @media(min-width: 1000px){
        display:none;
    }
`

export const Line1 = styled.div`
    width:35px;
    height: 2px;
    transform: rotateZ(${props => props.open ? "45deg" : "0deg" });
    transition: transform .5s, margin .5s;
    background-color: ${props => props.theme.text};
    position: relative;
    bottom: ${props => props.open? "-1px": "8px"};
`
export const Line2 = styled.div`
    width:35px;
    height: 2px;
    opacity: ${props => props.open ? "0" : "1"};
    display: ${props => props.open ? "none" : "flex"};
    transition: opacity .5s;
    background-color: ${props => props.theme.text};
    position:relative;
`
export const Line3 = styled.div`
    
    width:35px;
    height: 2px;
    transform: rotateZ(${props => props.open ? "-45deg" : "0deg" });
    //margin: ${props => props.open? "0 15px": "3px 15px"};
    transition: transform .5s, margin .5s;
    background-color: ${props => props.theme.text};
    position: relative;
    top: ${props => props.open? "0px": "8px"};
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
    @media(max-width: 1000px){
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