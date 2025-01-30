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
    margin-bottom: 40px; /* Adiciona espaço abaixo do grid */
  }

  .footer-section {
    width: 100%;
    text-align: center;
    margin-top: auto; /* Empurra o rodapé para o final da página */
    padding: 20px 0; /* Adiciona um pouco de padding */
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
  width: 150px; 
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease; 

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

export const TechButton = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1); // Borda sutil
  border-radius: 15px;
  background-color: rgba(200, 200, 200, 0.3); // Cinza claro e transparente
  font-size: 0.9em;
  color: #333;
  cursor: default; // Para garantir que o cursor não mude para um ponteiro
  transition: transform 0.2s ease, background-color 0.2s ease; // Transição suave

  &:hover {
    transform: scale(1.05); // Efeito de scale pequeno
    background-color: rgb(243, 236, 236); // Aumenta levemente a opacidade ao passar o mouse
  }
`;


export const FooterText = styled.p`
  text-align: center; // Centraliza o texto
  font-family: inherit; // Usa a mesma fonte do título
  font-size: 0.8em; // Fonte menor
  font-weight: bold; // Texto em negrito
  color: rgb(243, 236, 236); 
  margin-top: 20px; // Espaçamento acima do texto
  margin-bottom: 20px; // Espaçamento abaixo do texto
`;

export const HomeButton = styled.a`
  position: relative;
  padding: 10px 40px;
  border: 1px solid rgb(253, 252, 252);
  background: var(--btn-color); /* Cor de fundo azul */
  cursor: pointer;
  
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