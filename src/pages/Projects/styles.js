import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Variáveis CSS para o HomeButton
const btnColor = 'rgb(17, 149, 158)'; // Cor de destaque do botão Home
const textColor = 'white';
const shadowColor = 'rgba(0, 0, 0, 0.4)';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 80px;
    background: linear-gradient(to bottom, #000000 0%, #001a33 100%);
    color: white;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    overflow-x: hidden; /* Evita rolagem horizontal */

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr; /* Padrão: uma coluna em mobile */
        gap: 30px; /* Aumentado o gap entre os cards */
        width: 95%;
        max-width: 1200px;
        z-index: 2;
        margin-bottom: 40px;

        @media (min-width: 769px) {
            grid-template-columns: repeat(2, 1fr); /* Duas colunas em desktop */
            gap: 40px; /* Aumentado o gap para desktop */
        }

        @media (min-width: 1200px) { /* Opcional: 3 colunas em telas muito grandes */
            grid-template-columns: repeat(3, 1fr);
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
    background-color: rgba(30, 26, 37, 0.5); /* Fundo mais escuro e translúcido */
    padding: 25px; /* Mais padding */
    border-radius: 12px; /* Cantos mais arredondados */
    border: 1px solid rgba(255, 255, 255, 0.15); /* Borda mais visível */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    cursor: pointer; /* Indica que o card é clicável */
    display: flex; /* Para alinhar o conteúdo interno */
    flex-direction: column; /* Conteúdo em coluna por padrão */

    &:hover {
        transform: translateY(-8px); /* Efeito de elevação mais pronunciado */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        background-color: rgba(40, 36, 47, 0.7); /* Fundo ligeiramente mais claro no hover */
    }
`;

export const ProjectContentWrapper = styled.div`
    display: flex;
    flex-direction: column; /* Padrão: empilha a imagem e o texto */
    align-items: center; /* Centraliza a imagem e o texto em mobile */
    gap: 20px;
    height: 100%; /* Garante que o conteúdo ocupe a altura total do card */

    @media (min-width: 769px) {
        flex-direction: row; /* Layout em linha para desktop */
        align-items: flex-start; /* Alinha o texto ao topo da imagem */
    }
`;

export const ProjectText = styled.div`
    flex: 1;
    text-align: center; /* Centraliza texto em mobile */
    
    @media (min-width: 769px) {
        text-align: left; /* Alinha à esquerda em desktop */
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 1.6rem; /* Tamanho maior */
    margin-bottom: 10px;
    color: #00DDEB; /* Cor de destaque para o título */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

    @media (min-width: 769px) {
        font-size: 1.8rem;
    }
`;

export const ProjectDescription = styled.p`
    font-size: 1rem; /* Tamanho ligeiramente maior */
    color: #e0e0e0; /* Cor mais clara para a descrição */
    line-height: 1.5; /* Espaçamento entre linhas */
    margin-bottom: 15px; /* Mais espaço abaixo da descrição */

    @media (min-width: 769px) {
        font-size: 1.1rem;
    }
`;

export const ProjectLinkWrapper = styled.div`
    flex-shrink: 0; /* Impede que a imagem encolha */
    @media (min-width: 769px) {
        width: 180px; /* Largura fixa para a thumbnail em desktop */
        height: 180px; /* Altura fixa para a thumbnail em desktop */
    }
`;

export const ProjectThumbnail = styled.img`
    width: 100%;
    height: 200px; /* Altura fixa para mobile */
    border-radius: 8px;
    object-fit: cover; /* Recorta a imagem para preencher */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0, 221, 235, 0.3); /* Borda sutil de destaque */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    @media (min-width: 769px) {
        width: 180px; /* Largura fixa para a thumbnail em desktop */
        height: 180px; /* Altura fixa para a thumbnail em desktop */
    }

    &:hover {
        transform: scale(1.03); /* Efeito de zoom mais suave */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2; /* Opacidade reduzida para não competir com o conteúdo */
    z-index: 1;
`;

export const PageTitle = styled.h1`
    font-family: 'Luckiest Guy', serif; /* Mantido o estilo de fonte */
    font-size: 2.8rem; /* Aumentado para mais impacto */
    margin-bottom: 40px; /* Mais espaço abaixo do título */
    z-index: 2;
    color: #ffffff;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); /* Sombra mais forte */
    transition: all 0.4s ease; /* Transição mais suave */
    animation: pulse 3s infinite ease-in-out; /* Velocidade da animação ajustada */

    @media (min-width: 769px) {
        font-size: 3.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2.2rem;
        animation: none; /* Remove a animação em telas pequenas, se preferir */
    }

    &:hover {
        color: rgb(0, 221, 235); /* Manteve a cor de hover que você tinha */
        text-shadow: 0 0 15px #00DDEB, 0 0 30px #00DDEB, 0 0 45px #00DDEB; /* Efeito de brilho */
        transform: scale(1.07);
    }

    /* Keyframes de pulso movidos para cá para garantir que "Luckiest Guy" esteja disponível */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); } /* Pulsa um pouco mais */
        100% { transform: scale(1); }
    }
`;

export const TechButton = styled.span`
    display: inline-block;
    margin: 6px; /* Mais espaço */
    padding: 8px 15px; /* Mais padding */
    border: 1px solid #00DDEB; /* Borda da cor de destaque */
    border-radius: 20px; /* Mais arredondado */
    background-color: rgba(0, 221, 235, 0.15); /* Fundo translúcido com cor de destaque */
    font-size: 0.95em; /* Ligeiramente maior */
    color: #00DDEB; /* Cor do texto de destaque */
    cursor: default;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
    font-weight: bold; /* Deixa o texto mais legível */

    @media (max-width: 480px) {
        font-size: 0.85em;
        padding: 6px 12px;
    }

    &:hover {
        transform: scale(1.1); /* Efeito de escala mais notável */
        background-color: #00DDEB; /* Inverte as cores no hover */
        color: #141218; /* Cor do texto escuro no hover */
        box-shadow: 0 2px 8px rgba(0, 221, 235, 0.5); /* Sombra de destaque no hover */
    }
`;

export const FooterText = styled.p`
    text-align: center;
    font-family: inherit;
    font-size: 0.9em; /* Ligeiramente maior */
    font-weight: normal; /* Menos negrito para o texto principal */
    color: rgb(200, 200, 200); /* Cor mais suave */
    margin: 20px 0;
`;

export const HomeButton = styled(Link)`
    /* Variáveis CSS para o botão (corrigidas aqui) */
    --btn-color: ${btnColor};
    --text-color: ${textColor};
    --shadow-color: ${shadowColor};

    position: relative;
    padding: 10px 40px; /* Aumentado padding */
    border: 2px solid ${textColor}; /* Borda mais espessa */
    background: var(--btn-color);
    cursor: pointer;
    font-family: "Luckiest Guy", cursive;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 26px; /* Tamanho um pouco maior */
    color: var(--text-color);
    box-shadow: var(--shadow-color) 4px 4px 22px; /* Sombra mais pronunciada */
    border-radius: 6px; /* Mais arredondado */
    overflow: hidden;
    white-space: nowrap;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    text-decoration: none;
    display: inline-block;
    text-align: center;
    z-index: 2; /* Garante que o botão fique acima da imagem de fundo */

    @media (min-width: 769px) {
        font-size: 32px;
        padding: 12px 50px;
    }

    &:hover {
        transform: scale(1.08); /* Efeito de escala ligeiramente reduzido para ser mais suave */
        box-shadow: var(--shadow-color) 6px 6px 25px; /* Sombra mais intensa no hover */
    }

    &::before {
        content: '';
        pointer-events: none;
        opacity: 0.8; /* Opacidade aumentada */
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
