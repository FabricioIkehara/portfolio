import styled, { keyframes } from 'styled-components';

// Keyframes para a animação do modal
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideIn = keyframes`
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com opacidade */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Garante que o modal esteja acima de tudo */
    animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
    background-color: #1a1a1a; /* Fundo escuro do modal */
    color: white;
    padding: 30px;
    border-radius: 12px;
    max-width: 700px; /* Largura máxima do modal */
    width: 90%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    animation: ${slideIn} 0.4s ease-out;
    display: flex;
    flex-direction: column; /* Empilha os elementos internos */
    gap: 20px; /* Espaçamento entre os elementos */
    max-height: 90vh; /* Limita a altura do modal */
    overflow-y: auto; /* Adiciona scroll se o conteúdo for muito grande */

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #2b2b2b;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #007bff;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #0056b3;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: white;
    font-size: 1.8em;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
        transform: scale(1.2);
        color: #007bff;
    }
`;

export const ModalTitle = styled.h3`
    font-size: 2em;
    color: #00DDEB; /* Cor de destaque */
    margin-bottom: 10px;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const ModalThumbnail = styled.img`
    width: 100%;
    max-height: 300px; /* Altura máxima para a thumbnail no modal */
    object-fit: contain; /* Ajusta a imagem sem cortá-la */
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalSectionTitle = styled.h4`
    font-size: 1.4em;
    color: #007bff;
    margin-top: 15px;
    margin-bottom: 8px;
`;

export const ModalParagraph = styled.p`
    font-size: 1.1em;
    line-height: 1.6;
    color: #e0e0e0;
`;

export const ModalTechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
`;

export const ModalTechButton = styled.span`
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid #007bff;
    border-radius: 15px;
    background-color: rgba(0, 123, 255, 0.1);
    font-size: 0.9em;
    color: #007bff;
    font-weight: bold;
`;

export const ModalLinkButton = styled.a`
    background-color: #00DDEB; /* Cor de destaque para o botão de link */
    color: #1a1a1a; /* Texto escuro */
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    margin-top: 20px;
    align-self: center; /* Centraliza o botão no modal */
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: #00AFB9; /* Cor de destaque mais escura no hover */
        transform: translateY(-3px);
    }
`;
