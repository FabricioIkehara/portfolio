import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(43, 38, 53, 0.5); /* Opacidade aplicada apenas ao fundo */
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
  opacity: 0.5; /* Opacidade da imagem de fundo */
`;

export const AboutTitle = styled.h1`
  font-family: 'Luckiest Guy', serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  z-index: 2;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(17, 149, 158);
    text-shadow: 0 0 10px #00DDEB, 0 0 20px #00DDEB, 0 0 30px #00DDEB;
    transform: scale(1.05);
  }

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

  animation: pulse 2s infinite ease-in-out;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutPhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgb(17, 149, 158);
  box-shadow: 0 0 10px rgba(17, 149, 158, 0.5);
  transition: transform 0.3s ease-in-out; /* Adiciona transição suave */

  &:hover {
    transform: scale(1.1); /* Aumenta a escala em 10% */
  }
`;



export const AboutText = styled.div`
  flex: 1;
  padding: 20px;
  font-family: 'Luckiest Guy', serif;
  font-size: 18px;
  line-height: 1.6;
  background: rgba(56, 75, 160, 0.7); /* Fundo semi-transparente */
  border-radius: 10px;
  color: white; /* Texto branco */

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 16px;
  }
`;


export const HomeButton = styled(Link)`
  position: relative;
  padding: 10px 40px;
  border: 1px solid rgb(253, 252, 252);
  background: var(--btn-color); /* Cor de fundo azul */
  cursor: pointer;
  margin-top: 20px;
  
  font-family: "Luckiest Guy", cursive;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 30px;
  color: var(--text-color);
  
  box-shadow: var(--shadow-color) 2px 2px 22px;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  transition: transform 0.3s ease-in-out;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); 
  text-decoration: none; /* Remove o sublinhado padrão dos links */
  display: inline-block; /* Mantém o comportamento de botão */
  text-align: center; /* Centraliza o texto */

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
    from {
      transform: translate();
    }
    to {
      transform: translate(0, -66.666%);
    }
  }
`;