import styled from 'styled-components';

export const MenuContainer = styled.div`
    align-self: flex-end;
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    width: 200px;
    padding: 0 10px;
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
    align-items: flex-start;
    margin-top: 20px;
    @media(min-width: 1000px){
        display:none;
    }
`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.1em;
    padding: 15px 5px;
    width: 100%;
    &:not(:last-child){
        border-bottom: 1px solid #838383;
    }
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;//${props => props.theme.text};
    &:hover{
        opacity: 0.5;
    }

    span{
        margin-left: 10px;
    }
`