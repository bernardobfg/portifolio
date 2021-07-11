import React, {useState} from "react"
import {
    Container,
    Content,
    Section,
    AboutMe,
    Contact,
    ContactMsg,
    ContactA,
    Title, Projects,
    KnowLedgeArea,
    KnowledgeInformation, 
    KnowledgeCollection
} from "./styles"

import { SiGmail } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"
import { GrLinkedinOption } from "react-icons/gr"
import { FaWhatsapp } from "react-icons/fa"


import programmer from "../../assets/programmer.svg"
import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Project from "../../components/Project"
import Knowledge from "../../components/Knowledge"

import { projetos } from "../../projetos.js"
import {conhecimentos} from "../../conhecimentos.js"

const Home = () => {
    const [selectedKnowledge, setSelectedKnowledge] = useState(conhecimentos[0])
        const calcularIdade = () => {
            const dataAtual = new Date()
            const ano = dataAtual.getFullYear()
            const mes = dataAtual.getMonth() + 1
            const dia = dataAtual.getDate()
            if (mes < 9 || (mes === 9 && dia < 26)) {
                return ano-2001
            }
            return ano - 2000
        }
    return (
        <Container>
            <Header />
            <MenuLateral />
            <Content>
            <Section id="sobreMim">
                <Title>Sobre Mim</Title>        
                <AboutMe>
                    <img src={programmer} alt="Programador"/>        
                    <div>
                        <p>
                            Meu nome é Bernardo Bevilaqua tenho {calcularIdade()} anos e vivo no Rio de Janeiro.
                            Atualmente estudo Engenharia Eletrônica e de Computação na UFRJ e no início da pandemia, comecei a estudar desenvolvimento web e me encantei pela área.
                            Além disso, sou consultor de projetos Frontend na Fluxo Consultoria, desenvolvendo aplicações em React.
                            Também estou buscando explorar novas áreas e por isso, comecei a estudar tecnologias Back-End.
                        </p>
                        
                    </div>
                </AboutMe>
            </Section>
            <Section id="projetos">
                <Title>Projetos</Title>        
                <Projects>
                    {
                        projetos.map((project, index) => <Project key={index} project={project}/>)
                    }
                </Projects>
            </Section>
            <Section id="conhecimentos">
                <Title>Conhecimentos</Title>        
                <KnowLedgeArea>
                    <KnowledgeInformation>
                            <h2>{selectedKnowledge.nome}</h2>
                            <p>{selectedKnowledge.descricao}</p>
                            <h3>Experiência: {selectedKnowledge.experiencia}</h3>
                    </KnowledgeInformation>
                    <KnowledgeCollection>
                    {
                            conhecimentos.map((conhecimento, index) => {
                                return (
                                    <Knowledge
                                        key={index}
                                        nome={conhecimento.nome}
                                        imagem={conhecimento.imagem}
                                        onClick={() => setSelectedKnowledge(conhecimento)}
                                        selected={selectedKnowledge === conhecimento}
                                    />
                            )
                        })        
                    }        
                    </KnowledgeCollection>
                </KnowLedgeArea>
                </Section>
            <Section id="contato">
                <Title>Contato</Title>
                <ContactMsg>Obrigado pela atenção! Se quiser entrar em contato comigo para qualquer assunto, utilize um dos canais abaixo!</ContactMsg>    
                <Contact>
                    <ContactA href="https://www.linkedin.com/in/bernardo-bevilaqua/" target="_blank" bg="#2867B2">
                        <GrLinkedinOption/>
                        Linkedin
                    </ContactA>
                    <ContactA href="https://github.com/bernardobfg" target="_blank" bg="#333">
                        <AiFillGithub/>
                        Github
                    </ContactA>
                    <ContactA href="mailto:bernardo.bfg@poli.ufrj.br" target="_blank" bg="#E60023">
                        <SiGmail/>
                        Gmail
                    </ContactA>
                    <ContactA href="https://web.whatsapp.com/send?phone=5521999034875" target="_blank" bg="#25D366">
                        <FaWhatsapp/>
                        WhatsApp
                    </ContactA>    
                </Contact>
            </Section>
                
            </Content>
        </Container>
    )
}

export default Home;