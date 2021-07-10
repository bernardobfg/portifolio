import React, {useState} from "react"
import {
    Container,
    Content,
    Section,
    AboutMe,
    Contact,
    Title, Projects,
    KnowLedgeArea,
    KnowledgeInformation, 
    KnowledgeCollection
} from "./styles"

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
                            Atualmente estudo Engenharia Eletrônica e de Computação na UFRJ e no início da pândemia, comecei a estudar desenvolvimento web e me encantei pela área.
                            Além disso, sou consultor de projetos Frontend na Fluxo Consultoria, desenvolvendo aplicações em React.
                            Também estou buscando explorar novas áreas e por isso, comecei a estudar Node Js.
                        </p>
                        <Contact>
                                <a href="https://www.linkedin.com/in/bernardo-bevilaqua/">Linkedin</a>
                                <a href="https://github.com/bernardobfg">Github</a>   
                                <a href="mailto:bernardo.bfg@poli.ufrj.br">Gmail</a>       
                        </Contact>
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
                            <h3>{selectedKnowledge.nome}</h3>
                            <p>{selectedKnowledge.descricao}</p>
                            <h4>Experiência: {selectedKnowledge.experiencia}</h4>
                    </KnowledgeInformation>
                    <KnowledgeCollection>
                    {
                            conhecimentos.map((conhecimento, index) => {
                                return (
                                    <Knowledge
                                        key={index}
                                        nome={conhecimento.nome}
                                        imagem={conhecimento.imagem}
                                        experiencia={conhecimento.experiencia}
                                        onClick={() => setSelectedKnowledge(conhecimento)}
                                        selected={selectedKnowledge === conhecimento}
                                    />
                            )
                        })        
                    }        
                    </KnowledgeCollection>
                </KnowLedgeArea>
            </Section>   
            </Content>
        </Container>
    )
}

export default Home;