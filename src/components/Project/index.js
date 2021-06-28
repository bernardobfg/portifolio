import React from "react";
import { ProjectName, Container, ProjectDescription, ProjectLinks, ProjectLink } from "./styles"
import { AiFillGithub } from "react-icons/ai"
import {BiLink} from "react-icons/bi"
const Project = ({ project }) => {
    
    return ( 
        <Container>
            <ProjectName>
                {project.name}
            </ProjectName>
            <ProjectDescription>
                {project.description}
            </ProjectDescription>
            <ProjectLinks>
                <ProjectLink href={project.linkSite} target="_blank">
                    <BiLink size="1.2em"/>
                    WebSite
                </ProjectLink>
                <ProjectLink href={project.linkGit} target="_blank">
                    <AiFillGithub size="1.2em" style={{marginRight: "5px"}}/>
                    Github
                </ProjectLink>
            </ProjectLinks>
        </Container>
     );
}
export default Project;