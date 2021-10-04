import React, { useState } from "react";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { database } from "../../services/firebase"
import { ref, push,  } from "firebase/database";
import {
    Container,
    Content,
    Section,
    AboutMe,
    ContactLinks,
    ContactDiscription,
    ContactLink,
    Form,
    Input,
    TextArea,
    SubmitBtn,
    Title, Projects,
    KnowLedgeArea,
    KnowledgeInformation, 
    KnowledgeCollection,
    ImgContainer
} from "./styles"

import { SiGmail } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"
import { GrLinkedinOption } from "react-icons/gr"
import { FaWhatsapp } from "react-icons/fa"


import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Project from "../../components/Project"
import Knowledge from "../../components/Knowledge"

import { projetos } from "../../data/projetos.js"
import {conhecimentos} from "../../data/conhecimentos.js"
import { Dev } from "../../components/Dev";

const Home = () => {
    const [selectedKnowledge, setSelectedKnowledge] = useState(conhecimentos[0])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
    const calcularIdade = () => {
        const dataAtual = new Date()
        const ano = dataAtual.getFullYear()
        const mes = dataAtual.getMonth() + 1
        const dia = dataAtual.getDate()
        if (mes < 9 || (mes === 9 && dia < 26)) {
            return ano - 2001
        }
        return ano - 2000
    }
    const toastProps = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        const contact = {name, email, message}
        try {
            await push(ref(database, 'contacts/'), contact);
            toast.success('Mensagem enviada com sucesso', toastProps);
        }
        catch (error) {
            console.log(error)
            toast.error('Erro ao enviar mensagem', toastProps);
        }
        
        setIsLoading(false)
        setName("")
        setMessage("")
        setEmail("")
    }
    return (
        <Container>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <Header />
            <MenuLateral />
            <Content>
                <Section id="sobreMim">
                    <Title>Sobre Mim</Title>
                    <AboutMe>
                        <ImgContainer
                            onMouseEnter={() => setIsAnimationPlaying(true)}
                            onMouseLeave={() => setIsAnimationPlaying(false)}
                        >
                            <Dev isAnimationPlaying={isAnimationPlaying}/>
                         </ImgContainer>
                        
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
                            projetos.map((project, index) => <Project key={index} project={project} />)
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
                    <ContactDiscription>
                        Obrigado pela atenção! Se quiser entrar em contato comigo
                        para qualquer assunto, não deixe de me contactar em dos canais abaixo!
                    </ContactDiscription>
                    <ContactLinks>
                        <ContactLink href="https://www.linkedin.com/in/bernardo-bevilaqua/" target="_blank" bg="#2867B2">
                            <GrLinkedinOption />
                            Linkedin
                        </ContactLink>
                        <ContactLink href="https://github.com/bernardobfg" target="_blank" bg="#333">
                            <AiFillGithub />
                            Github
                        </ContactLink>
                        <ContactLink href="mailto:bernardo.bfg@poli.ufrj.br" target="_blank" bg="#E60023">
                            <SiGmail />
                            Gmail
                        </ContactLink>
                        <ContactLink href="https://web.whatsapp.com/send?phone=5521999034875" target="_blank" bg="#25D366">
                            <FaWhatsapp />
                            WhatsApp
                        </ContactLink>
                    </ContactLinks>
                    <ContactDiscription>
                        Ou se preferir, pode deixar uma mensagem aqui, em breve retornarei!
                    </ContactDiscription>
                    <Form>

                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                        />
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <TextArea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Mensagem"
                        />
                        <SubmitBtn
                            onClick={(event) => handleSubmit(event)}
                            disabled={!name.trim() || !email.trim() || !message.trim()}
                        >
                            {
                                isLoading ?
                                    <ReactLoading type="spin" width={20} height={20}/>:
                                    "Enviar"

                            }
                        </SubmitBtn>

                    </Form>

                </Section>

            </Content>
        </Container>
    )
}

export default Home;