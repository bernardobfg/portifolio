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
    margin: 10px 20px;
    border-top: 10px solid ${props => props.theme.auxiliar};
    transition: border-top 2s;
    &:hover{
        border-top: 10px solid ${props => props.theme.primary};
    }
    
`

export const ProjectGif = styled.img`
    width: 350px;
    max-width: 100%;
    @media (max-width: 768px) {
        max-width: 90%;
    }
`
export const ModalContainer = styled.div`
    background-color: ${props => props.theme.auxiliar};
    width: 100%;
    height: 100%;
    max-width: 90vw;
    display: flex;
    max-width: 700px;
    justify-content: space-between;
    align-items:center;
    @media (max-width: 768px) {
        flex-direction: column;
    }


`

export const ModalContent = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`
export const ModalTitle = styled.h1`
    letter-spacing: 1px;
    text-align:center;
    font-size: 2em;
    margin-bottom: 10px;
    color: ${props => props.theme.text};
    @media(max-width: 768px){
        display: none;
    }
`
export const ModalTitleSmallDevices = styled.h1`
    letter-spacing: 1px;
    text-align:center;
    font-size: 2em;
    margin-bottom:10px;
    color: ${props => props.theme.text};
    @media(min-width: 768px){
        display: none;
    }
`
export const ProjectImage = styled.img`
    width: 100%;
`
export const ProjectName = styled.h1`
    letter-spacing: 1px;
    text-align:center;
    font-size: 1.8em;
    color: ${props => props.theme.text};
`

export const ProjectDescription = styled.p`
    font-size:1.2em;
    width: 300px;
    text-align:justify;
    color: ${props => props.theme.text};
    margin: 20px 0;
    @media(max-width: 768px){
        width: 90%;
    }
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
    svg{
        margin-right: 5px;
    }
`

export const ViewMoreButton = styled.button`
    color: #F0F0F0;
    background-color: ${props => props.theme.primary};
    margin: 10px 15px 20px;
    font-size: 1.1em;
    font-weight: 500;
    border-radius: 10px;
    height: 40px;
    width: 180px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity: 0.8;
    }
    svg{
        margin-right: 5px;
    }
`