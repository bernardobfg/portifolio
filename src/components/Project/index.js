import React from "react";
import {ProjectName, Container, ProjectDescription, ProjectLinks, ProjectLink} from "./styles"
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
                <ProjectLink onClick={e=> handleClick(e,project.linkSite)}>WebSite</ProjectLink>
                <ProjectLink onClick={e=> handleClick(e,project.linkGit)}>Github</ProjectLink>
            </ProjectLinks>
        </Container>
     );
}
export default Project;