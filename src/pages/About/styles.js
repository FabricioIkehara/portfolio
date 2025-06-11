import styled from 'styled-components';

export const AboutContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(to bottom, #001a33 0%, #003366 100%); /* Exemplo de gradiente */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Alinha o conteúdo ao topo */
    padding: 20px;
    padding-top: 120px; /* Aumenta o padding no topo para afastar do menu */
    text-align: center;
    box-sizing: border-box; /* Garante que o padding não aumente a altura total */
`;

export const AboutTitle = styled.h1`
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


export const AboutContent = styled.p`
    font-size: 1.1em;
    line-height: 1.6;
    max-width: 800px;
    margin-bottom: 20px; /* Reduz um pouco o espaçamento entre parágrafos */
    padding: 0 15px; /* Adiciona padding lateral para mobile */
`;

export const AboutImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 30px; /* Margem superior para afastar do título */
    margin-bottom: 40px; /* Margem inferior para afastar do texto */
    box-shadow: 0 8px 16px rgba(0,0,0,0.5); /* Sombra mais pronunciada */
    border: 3px solid #00DDEB; /* Borda de destaque */
`;
