// src/pages/Projects/Projects.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ProjectsContainer, ProjectCard, ProjectTitle,
    ProjectDescription, /* ProjectThumbnail, */ // BackgroundImage removido
    PageTitle, TechButton, FooterText, HomeButton,
    ProjectContentWrapper, ProjectText, ProjectLinkWrapper, ProjectThumbnail
} from './styles.js'; // Importando os styled components de Projects.js
import MenuBar from '../../components/MenuBar/menu-bar.jsx'; // Importando o MenuBar

// Importando assets
// import projectsImage from '../../assets/projects.jpg'; // Imagem de fundo removida
import thumb1 from '../../assets/nutricao.jpg';
import thumb2 from '../../assets/crudphp.jpg';
import thumb3 from '../../assets/pokemontcg.jpg';
import thumb4 from '../../assets/softcar.jpg';
import thumb5 from '../../assets/sheets.jpg';
import thumb6 from '../../assets/comingsoon.jpg';

// Importar o componente do modal
import ProjectDetailsModal from '../../components/ProjectModal/ProjectDetailsModal.jsx'; 

// Dados dos projetos (mantidos os mesmos detalhes que adicionei antes para o modal)
const projects = [
    {
        title: 'Nutrição Que Inspira',
        description: 'A landing page for a nutrition clinic, designed with a focus on user experience and conversion optimization. It features a modern, clean design and responsive layout for all devices.',
        thumbnail: thumb1,
        link: 'https://nutricaoqueinspira.com.br/',
        technologies: ['HTML', 'CSS', 'React', 'Styled Components', 'Figma'],
        details: 'Developed a fully responsive landing page for a nutrition clinic. Focused on clean UI/UX, fast loading times, and intuitive navigation. Used React for component-based architecture and Styled Components for modular styling.',
        challenge: 'Integrating custom animations and ensuring cross-browser compatibility.',
        solution: 'Utilized React hooks for state management of animations and tested extensively across various browsers and devices.'
    },
    {
        title: 'CRUD em PHP',
        description: 'A CRUD application in PHP for managing a list of registered brokers, featuring robust data handling and a user-friendly interface built with Bootstrap.',
        thumbnail: thumb2,
        link: 'https://www.youtube.com/watch?v=D5ngTk3t24A',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'Apache'],
        details: 'Built a complete Create, Read, Update, Delete (CRUD) system using PHP for backend logic and MySQL for database management. Frontend was styled with Bootstrap for a responsive and modern look. The application provides efficient management of broker data.',
        challenge: 'Ensuring secure database interactions and preventing SQL injection vulnerabilities.',
        solution: 'Implemented prepared statements and parameterized queries for all database operations, significantly enhancing security.'
    },
    {
        title: 'Pokemon TCG',
        description: 'Consumption of the Pokemon TCG Card API, with dynamic pagination and a detailed view for each card. Allows users to browse and learn about their favorite Pokémon cards.',
        thumbnail: thumb3,
        link: 'https://fabricioikehara.github.io/pokemontcg/',
        technologies: ['Angular', 'API', 'RxJS', 'SCSS'],
        details: 'Developed an Angular application to interact with the Pokémon TCG API. Features include dynamic pagination for efficient loading of cards, detailed view for individual cards, and responsive design. Utilized RxJS for reactive programming and SCSS for advanced styling.',
        challenge: 'Managing asynchronous data fetching from the API and optimizing performance for large datasets.',
        solution: 'Implemented loading indicators and intelligent pagination strategies to ensure a smooth user experience, even with thousands of cards.'
    },
    {
        title: 'Soft-Car',
        description: 'An application in Python (Django) and Angular for managing automotive service orders, including client details, vehicle information, and service history.',
        thumbnail: thumb4,
        link: 'https://www.youtube.com/watch?v=fams89rSA6o',
        technologies: ['Python', 'Angular', 'Django', 'PostgreSQL', 'REST API'],
        details: 'Full-stack application for automotive service management. The backend was developed with Django REST Framework in Python, providing a robust API for data management. The frontend, built with Angular, offers a comprehensive interface for managing clients, vehicles, and service orders. Integrated PostgreSQL for database management.',
        challenge: 'Designing a clear and intuitive data model to handle complex relationships between clients, vehicles, and services.',
        solution: 'Employed database normalization techniques and built efficient Django ORM queries to manage data relationships effectively, ensuring data integrity and fast retrieval.'
    },
    {
        title: 'CSV para Google Sheets',
        description: 'A Python project to import a CSV file into a Google Sheets spreadsheet using the Google Sheets API. Designed for automated data synchronization.',
        thumbnail: thumb5,
        link: 'https://github.com/FabricioIkehara/csv-sheets',
        technologies: ['Python', 'Google Sheets API', 'Pandas', 'OAuth2'],
        details: 'Developed a Python script to automate the process of importing CSV data into Google Sheets. Leveraged the Google Sheets API for seamless integration and Pandas for data manipulation. Features secure authentication using OAuth2. This tool streamlines data transfer and reporting processes.',
        challenge: 'Handling API authentication securely and efficiently, especially with large CSV files.',
        solution: 'Implemented a robust OAuth2 flow for authentication and chunking for large file uploads, ensuring reliable and secure data transfer to Google Sheets.'
    },
    {
        title: 'Coming Soon',
        description: 'A new exciting project is currently under development. Stay tuned for updates!',
        thumbnail: thumb6,
        link: '#', // Link para o modal em vez de '#' direto, para que o modal avise
        technologies: [],
        details: 'This project is currently in the conceptualization and initial development phase. More details will be provided soon!',
        challenge: 'Developing innovative solutions for complex user needs.',
        solution: 'Applying agile methodologies and continuous integration practices to ensure a smooth and efficient development process.'
    }
];

const Projects = () => {
    // Estado para controlar qual projeto está selecionado e se o modal está aberto
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Efeito para rolar para o topo da página ao carregar
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Função para lidar com o clique em um cartão de projeto
    const handleProjectClick = (project) => {
        if (project.link === '#') {
            // Apenas abre o modal para projetos "coming soon" se não houver um link externo direto
            setSelectedProject(project);
            setIsModalOpen(true);
        } else {
            // Para outros projetos, mostra o modal e oferece a opção de visitar o link
            setSelectedProject(project);
            setIsModalOpen(true);
        }
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <ProjectsContainer>
            <MenuBar />
            <PageTitle>My Projects</PageTitle>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    // Tornar o ProjectCard clicável
                    <ProjectCard key={index} onClick={() => handleProjectClick(project)}>
                        <ProjectContentWrapper>
                            {/* Thumbnail à esquerda */}
                            <ProjectLinkWrapper> {/* Wrapper para a imagem */}
                                <ProjectThumbnail src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
                            </ProjectLinkWrapper>
                            
                            <ProjectText>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <div className="technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <TechButton key={techIndex}>{tech}</TechButton>
                                    ))}
                                </div>
                            </ProjectText>
                        </ProjectContentWrapper>
                    </ProjectCard>
                ))}
            </div>
            <div className="footer-section">
                <FooterText>
                    Some projects do not have the back-end hosted, so I opted for video presentations.
                </FooterText>
                <HomeButton to="/">Back to Home</HomeButton>
            </div>

            {/* Renderizar o modal se isModalOpen for true e selectedProject existir */}
            {isModalOpen && selectedProject && (
                <ProjectDetailsModal project={selectedProject} onClose={closeModal} />
            )}
        </ProjectsContainer>
    );
};

export default Projects;