import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    font-size: 2rem;
    margin-bottom: 20px;
    z-index: 2;

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 95%;
    max-width: 1200px;
    z-index: 2;
    margin-bottom: 40px;

    @media (min-width: 769px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer-section {
    width: 100%;
    text-align: center;
    margin-top: auto;
    padding: 20px 0;
    z-index: 2;
  }
`;

export const ProjectCard = styled.div`
  background-color: rgba(30, 26, 37, 0.3);
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
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .project-text {
    flex: 1;
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
  font-size: 1.3rem;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #ccc;

  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (min-width: 769px) {
    width: 150px;
    height: 150px;
  }

  &:hover {
    transform: scale(1.05);
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
  font-size: 2rem;
  margin-bottom: 20px;
  z-index: 2;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    animation: none;
  }

  &:hover {
    color: rgb(17, 149, 158);
    text-shadow: 0 0 10px #00DDEB, 0 0 20px #00DDEB, 0 0 30px #00DDEB;
    transform: scale(1.05);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  animation: pulse 2s infinite ease-in-out;
`;

export const TechButton = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: rgba(200, 200, 200, 0.3);
  font-size: 0.9em;
  color: #333;
  cursor: default;
  transition: transform 0.2s ease, background-color 0.2s ease;

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 4px 8px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgb(243, 236, 236);
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-family: inherit;
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(243, 236, 236);
  margin: 20px 0;
`;

export const HomeButton = styled(Link)`
  position: relative;
  padding: 8px 32px;
  border: 1px solid rgb(253, 252, 252);
  background: var(--btn-color);
  cursor: pointer;
  font-family: "Luckiest Guy", cursive;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 24px;
  color: var(--text-color);
  box-shadow: var(--shadow-color) 2px 2px 22px;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  transition: transform 0.3s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  text-decoration: none;
  display: inline-block;
  text-align: center;

  @media (min-width: 769px) {
    font-size: 30px;
    padding: 10px 40px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    pointer-events: none;
    opacity: 0.6;
    background:
      radial-gradient(circle at 10% 20%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 80% 30%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 50% 10%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 20% 70%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 90% 80%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 60% 50%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px),
      radial-gradient(circle at 30% 60%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px),
      radial-gradient(circle at 70% 40%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);
    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    animation: bubbles 2.5s linear infinite both;
  }

  @keyframes bubbles {
    from { transform: translate(); }
    to { transform: translate(0, -66.666%); }
  }
`;