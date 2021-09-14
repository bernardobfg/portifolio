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
    padding: 0 50px;
    
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 30px 0;
    h1{
        border-bottom: 1px solid ${props => props.theme.auxiliar};
    }
`
export const Title = styled.h1`
    text-align: center;
    font-size: 1.8em;
    margin-bottom: 20px;
    color: ${props => props.theme.text};
    padding-bottom: 10px;
`
export const AboutMe = styled.div`
    color: ${props => props.theme.text};
    margin-top: 20px;
    font-size: 1.1em;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    gap: 100px;
    img{
        max-width: 350px;
    }
    @media(max-width: 850px){
        justify-content:center;
        text-align: center;
        img{
            display:none ;
        }
    }
`

export const ContactLinks = styled.div`
    width: 50%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
   
`
export const ContactDiscription = styled.h4`
    color: ${props => props.theme.text};
    margin: 20px auto;
    width: 60%;
    text-align: center;
`
export const ContactLink = styled.a`
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: ${props => props.bg};
    display:flex;
    align-items:center;
    gap: 10px;
    justify-content:center;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(1.5);
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
`
export const Input = styled.input`
    background-color: ${props => props.theme.auxiliar};
    color: ${props => props.theme.text};
    border: 2px solid black;
    width: 400px;
    height: 30px;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    &:focus{
        border: 2px solid ${props => props.theme.primary}; 
    }
`

export const TextArea = styled.textarea`
    background-color: ${props => props.theme.auxiliar};
    color: ${props => props.theme.text};
    border: 2px solid black;
    width: 400px;
    height: 200px;
    font-size: 16px;
    border-radius: 10px;
    resize: none;
    padding: 10px;
    &:focus{
        border: 2px solid ${props => props.theme.primary}; 
    }
`

export const SubmitBtn = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
    color: ${props => props => props.theme.text};
    font-size: 16px;
    font-weight: 600;
    cursor: ${props => props.disabled? "not-allowed": "pointer"};
    display: flex;
    align-items:center;
    justify-content: center;
`

export const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap: 20px;
`

export const KnowLedgeArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media(max-width: 850px){
        flex-direction: column;
    }
`
export const KnowledgeInformation = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 40%;
    color: ${props => props.theme.text};
    padding: 10px 20px;
    @media(max-width: 850px){
        width: 60%
    }

    p{
        text-align: center;
        font-size:1.2em;
    }

`

export const KnowledgeCollection = styled.div`
    display:flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    @media(max-width: 850px){
        width: 60%
    }
`