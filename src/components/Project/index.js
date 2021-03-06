import React, { useState } from "react";
import Modal from "react-modal"
import { ProjectName, Container, ModalContainer, ModalContent,ModalTitle, ModalTitleSmallDevices,ProjectDescription, ProjectLinks, ProjectLink, ProjectImage, ProjectGif, ViewMoreButton } from "./styles"
import { AiFillGithub } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import {FaSearchPlus} from "react-icons/fa"

Modal.setAppElement('#root')

const Project = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ProjectModal = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <ModalContainer>
                    <ModalTitleSmallDevices>{project.name}</ModalTitleSmallDevices>
                    <ProjectGif src={project.gif} />
                    <ModalContent>
                        <ModalTitle>{project.name}</ModalTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectLinks>
                            <ProjectLink
                                href={project.linkGit}
                                target="_blank"
                            >
                                <AiFillGithub size="1.2em" />
                                GitHub
                            </ProjectLink>
                            <ProjectLink
                                href={project.linkSite}
                                target="_blank">
                                <BiLink size="16px" />
                                WebSite
                            </ProjectLink>
                        </ProjectLinks>
                    </ModalContent>

                </ModalContainer>

            </Modal>
        )

    }

    return (
        <Container>
            <ProjectModal />
            <ProjectName>
                {project.name}
            </ProjectName>
            <ProjectImage src={project.image} alt=""/>

            <ProjectLinks>
                <ViewMoreButton onClick={() => setIsModalOpen(true)}>
                    <FaSearchPlus size="1.2em" />
                    Ver Detalhes
               </ViewMoreButton>
            </ProjectLinks>
        </Container>
    );
}
export default Project;