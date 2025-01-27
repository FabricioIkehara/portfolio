import React from 'react';
import { ProjectsContainer, ProjectCard, ProjectTitle, 
  ProjectDescription, ProjectThumbnail, BackgroundImage, PageTitle  } from './styles';
import projectsImage from '../../assets/projects.jpg';
import  thumb1  from '../../assets/nutricao.jpg';
import thumb2 from '../../assets/crudphp.jpg';
import thumb3 from '../../assets/pokemontcg.jpg';
import thumb4 from '../../assets/softcar.jpg';
import thumb5 from '../../assets/sheets.jpg';
import thumb6 from '../../assets/comingsoon.jpg';

const projects = [
  {
    title: 'Nutrição Que Inspira',
    description: 'Uma Landing Page para apresentação de um serviço de nutrição.',
    thumbnail: thumb1, 
    link: 'https://nutricaoqueinspira.com.br/'
  },
  {
    title: 'CRUD em PHP',
    description: 'Um Crud em PHP, com uma lista de corretores cadastrdos.',
    thumbnail: thumb2, 
    link: 'https://www.youtube.com/watch?v=D5ngTk3t24A'
  },
  {
    title: 'Pokemon TCG',
    description: 'COnsumo de API de Cards de Pokemon TCG, com páginação e visualização de detalhes.',
    thumbnail: thumb3,
    link: 'https://fabricioikehara.github.io/pokemontcg/'
  },
  {
    title: 'Soft-Car',
    description: 'Uma aplicação em Python e Angular, para controle de ordens de serviços automotivos.',
    thumbnail: thumb4, 
    link: 'https://www.youtube.com/watch?v=fams89rSA6o'
  },
  {
    title: 'CSV para google Sheets',
    description: 'Um projeto em Python para importar um arquivo CSV para uma planilha do Google Sheets. (Link do github)',
    thumbnail: thumb5, 
    link: 'https://github.com/FabricioIkehara/csv-sheets'
  },
  {
    title: 'coming soon',
    description: 'coming soon...',
    thumbnail: thumb6,
    link: '#'
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <BackgroundImage src={projectsImage} alt="Projects Background" />
      <PageTitle>My Projects</PageTitle>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <div className="project-content">
              <div className="project-text">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
              <ProjectThumbnail src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
            </div>
          </ProjectCard>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;