import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 10px 0;
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid ${props => props.theme.toggleBg};
    background-color: ${props => props.theme.header};
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
    font-size: 1.2em;
    margin: 0 15px;
    margin-top: ${props => props.selected? "5px": null};
    border-bottom: ${props => props.selected? `1px solid ${props.theme.toggleBg}`: null};
    
`

export const Lines = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media(min-width: 1000px){
        display:none;
    }
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

export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 50px;
    height: 22px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${props => props.theme.toggleBg};
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
`