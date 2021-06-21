import React from "react";
import { ProjectName, Container, ProjectDescription, ProjectLinks, ProjectLink } from "./styles"
import { AiFillGithub } from "react-icons/ai"
import {BiLink} from "react-icons/bi"
const Project = ({ project }) => {
    const handleClick = (e, link) => {
        e.preventDefault();
        window.location.href = link
    }
    return ( 
        <Container>
            <ProjectName>
                {project.name}
            </ProjectName>
            <ProjectDescription>
                {project.description}
            </ProjectDescription>
            <ProjectLinks>
                <ProjectLink onClick={e => handleClick(e, project.linkSite)}>
                    <BiLink size="1.2em"/>
                    WebSite
                </ProjectLink>
                <ProjectLink onClick={e => handleClick(e, project.linkGit)}>
                    <AiFillGithub size="1.2em" style={{marginRight: "5px"}}/>
                    Github
                </ProjectLink>
            </ProjectLinks>
        </Container>
     );
}
export default Project;