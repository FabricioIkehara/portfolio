import React, { useEffect } from 'react';
import { ProjectsContainer, ProjectCard, ProjectTitle, 
  ProjectDescription, ProjectThumbnail, BackgroundImage, 
  PageTitle, TechButton, FooterText, HomeButton } from './styles.js';
import projectsImage from '../../assets/projects.jpg';
import thumb1 from '../../assets/nutricao.jpg';
import thumb2 from '../../assets/crudphp.jpg';
import thumb3 from '../../assets/pokemontcg.jpg';
import thumb4 from '../../assets/softcar.jpg';
import thumb5 from '../../assets/sheets.jpg';
import thumb6 from '../../assets/comingsoon.jpg';

const projects = [
  {
    title: 'Nutrição Que Inspira',
    description: 'A landing page for a nutrition clinic.',
    thumbnail: thumb1, 
    link: 'https://nutricaoqueinspira.com.br/',
    technologies: ['HTML', 'CSS', 'React']
  },
  {
    title: 'CRUD em PHP',
    description: 'A CRUD in PHP with a list of registered brokers.',
    thumbnail: thumb2, 
    link: 'https://www.youtube.com/watch?v=D5ngTk3t24A',
    technologies: ['PHP', 'MySQL', 'Bootstrap']
  },
  {
    title: 'Pokemon TCG',
    description: 'Consumption of the Pokemon TCG Card API, with pagination and detailed view.',
    thumbnail: thumb3,
    link: 'https://fabricioikehara.github.io/pokemontcg/',
    technologies: ['Angular', 'API', 'CSS']
  },
  {
    title: 'Soft-Car',
    description: 'An application in Python and Angular for managing automotive service orders.',
    thumbnail: thumb4, 
    link: 'https://www.youtube.com/watch?v=fams89rSA6o',
    technologies: ['Python', 'Angular', 'Django']
  },
  {
    title: 'CSV para Google Sheets',
    description: 'A Python project to import a CSV file into a Google Sheets spreadsheet.',
    thumbnail: thumb5, 
    link: 'https://github.com/FabricioIkehara/csv-sheets',
    technologies: ['Python', 'Google Sheets API', 'Django']
  },
  {
    title: 'coming soon',
    description: 'coming soon...',
    thumbnail: thumb6,
    link: '#',
    technologies: []
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <TechButton key={techIndex}>{tech}</TechButton>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
              {/* Thumbnail clicável */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ProjectThumbnail src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
              </a>
            </div>
          </ProjectCard>
        ))}
      </div>
      <div className="footer-section">
        <FooterText>
          Some projects do not have the back-end hosted, so I opted for video presentations.
        </FooterText>
        <HomeButton to="/">Back to Home</HomeButton>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
