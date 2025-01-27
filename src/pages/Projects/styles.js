import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #141218;
  color: white;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5; /* Adjust the opacity as needed */
`;

export const ProjectCard = styled.div`
  background: #1f1b24;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-bottom: 10px;
`;
