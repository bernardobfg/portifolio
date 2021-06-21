import styled from 'styled-components';

export const Container = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    padding: 0 20px;;
    background-color: ${props => props.theme.auxiliar};
    border-top: 1px solid ${props => props.theme.primary};
`

export const ProjectName = styled.h1`
    letter-spacing: 1px;
    text-align:center;
    font-size: 2em;
    color: ${props => props.theme.text};
`

export const ProjectDescription = styled.p`
    font-size:1.3em;
    width: 300px;
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
    font-size: 1.2em;
    font-weight: 500;
    border-radius: 10px;
    height: 45px;
    width: 150px;
    cursor: pointer;
`