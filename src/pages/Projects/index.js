import React from 'react';
import { ProjectsContainer, ProjectCard, ProjectTitle, ProjectDescription, BackgroundImage } from './styles';
import projectsImage from '../../assets/projects.jpg'; // Caminho atualizado

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: '#'
  },
  // Adicione mais projetos conforme necessário
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <BackgroundImage src={projectsImage} alt="Projects Background" />
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
