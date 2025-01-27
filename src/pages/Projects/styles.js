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

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    z-index: 2;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    grid-template-rows: repeat(3, 1fr); /* 3 linhas */
    gap: 20px; /* Espaçamento entre os itens */
    width: 80%;
    max-width: 1200px;
    z-index: 2;
  }
`;

export const ProjectCard = styled.div`
  background-color: rgba(30, 26, 37, 0.3); /* Transparente com 70% de opacidade */
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .project-content {
    display: flex;
    align-items: center;
    gap: 20px; /* Espaçamento entre o texto e a thumbnail */
  }

  .project-text {
    flex: 1; /* Ocupa o espaço restante */
  }

  a {
    color: #00DDEB;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export const ProjectThumbnail = styled.img`
  width: 150px; /* Tamanho da thumbnail */
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 1;
`;

export const PageTitle = styled.h1`
  font-family: 'Luckiest Guy', serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  z-index: 2;
  color: #ffffff; /* Cor do texto */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra do texto */
  transition: all 0.3s ease; /* Transição suave para hover */

  &:hover {
    color:rgb(17, 149, 158); /* Muda a cor do texto ao passar o mouse */
    text-shadow: 0 0 10px #00DDEB, 0 0 20px #00DDEB, 0 0 30px #00DDEB; /* Efeito de neon */
    transform: scale(1.05); /* Aumenta ligeiramente o tamanho */
  }

  /* Efeito de pulsação (opcional) */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Aplicar animação de pulsação */
  animation: pulse 2s infinite ease-in-out;
`;