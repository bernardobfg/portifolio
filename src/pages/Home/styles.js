import styled from "styled-components"

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    max-width: 100vw;
    min-height: 100vh;
    padding-bottom: 50px;
`
export const Content = styled.div`
    max-width: 1000px;
    margin: 50px auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 30px;;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 15px;
    color: ${props => props.theme.text};
    padding-bottom: 2px;
`
export const AboutMe = styled.div`
    color: ${props => props.theme.text};
    margin-top: 20px;
    font-size: 1.3em;
    letter-spacing: 1px;
`

export const Projects = styled.div`
    display: flex;
`