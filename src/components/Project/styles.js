import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    padding: 0 20px;;
    background-color: ${props => props.theme.auxiliar};
    border-radius: 5px;
    margin: 0 20px;
    border-top: 10px solid ${props => props.theme.auxiliar};
    transition: border-top 2s;
    &:hover{
        border-top: 10px solid ${props => props.theme.primary};
    }
`

export const ProjectName = styled.h1`
    letter-spacing: 1px;
    text-align:center;
    font-size: 1.8em;
    color: ${props => props.theme.text};
`

export const ProjectDescription = styled.p`
    font-size:1.1em;
    width: 280px;
    text-align:center;
    color: ${props => props.theme.text};
`

export const ProjectLinks = styled.div`
    display: flex;
    justify-content:center;
`

export const ProjectLink = styled.button`
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.primary};
    margin: 10px 15px;
    font-size: 1.1em;
    font-weight: 500;
    border-radius: 10px;
    height: 40px;
    width: 120px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity: 0.8;
    }
`