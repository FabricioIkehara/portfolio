import React from 'react';
import { 
    ModalOverlay, 
    ModalContent, 
    CloseButton, 
    ModalTitle, 
    ModalThumbnail, 
    ModalSectionTitle, 
    ModalParagraph, 
    ModalTechContainer, 
    ModalTechButton, 
    ModalLinkButton 
} from './ProjectDetailsModal.js'; // Importando os Styled Components do arquivo .js

const ProjectDetailsModal = ({ project, onClose }) => {
    const isComingSoon = project.link === '#';

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}> {/* Impede que o clique no modal feche-o */}
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ModalTitle>{project.title}</ModalTitle>
                <ModalThumbnail src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
                <ModalParagraph>{project.description}</ModalParagraph>

                {project.details && (
                    <>
                        <ModalSectionTitle>Detalhes:</ModalSectionTitle>
                        <ModalParagraph>{project.details}</ModalParagraph>
                    </>
                )}

                {project.challenge && (
                    <>
                        <ModalSectionTitle>Desafio:</ModalSectionTitle>
                        <ModalParagraph>{project.challenge}</ModalParagraph>
                    </>
                )}

                {project.solution && (
                    <>
                        <ModalSectionTitle>Solução:</ModalSectionTitle>
                        <ModalParagraph>{project.solution}</ModalParagraph>
                    </>
                )}

                {project.technologies.length > 0 && (
                    <>
                        <ModalSectionTitle>Tecnologias Utilizadas:</ModalSectionTitle>
                        <ModalTechContainer>
                            {project.technologies.map((tech, index) => (
                                <ModalTechButton key={index}>{tech}</ModalTechButton>
                            ))}
                        </ModalTechContainer>
                    </>
                )}

                {!isComingSoon ? (
                    <ModalLinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                        Ver Projeto Online
                    </ModalLinkButton>
                ) : (
                    <ModalLinkButton as="div" style={{ cursor: 'default', opacity: 0.7, backgroundColor: '#555' }}>
                        Projeto em Breve!
                    </ModalLinkButton>
                )}
            </ModalContent>
        </ModalOverlay>
    );
};

export default ProjectDetailsModal;