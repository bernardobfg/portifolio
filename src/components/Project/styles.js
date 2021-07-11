import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    padding: 20px 20px 0;
    background-color: ${props => props.theme.auxiliar};
    box-shadow: 0 4px 10px 0 rgba( 31, 38, 135, 0.37 );
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

export const ProjectLink = styled.a`
    color: #F0F0F0;
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