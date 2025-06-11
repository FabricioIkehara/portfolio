// src/components/MenuBar/menu-bar.js
import styled from "styled-components";

export const MenuBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.99);
    padding: 15px 30px; /* Aumentado o padding vertical para dar mais altura à barra */
    min-height: 80px; /* Definindo uma altura mínima para garantir que não encolha muito */
    width: 100%;
    box-sizing: border-box; /* Garante que o padding não adicione à largura total */
    position: fixed; /* NOVO: Fixa o menu no topo */
    top: 0;          /* NOVO: Alinha ao topo */
    left: 0;         /* NOVO: Alinha à esquerda */
    z-index: 100;    /* NOVO: Garante que o menu fique acima de outros elementos */

    /* Estilos responsivos para telas menores */
    @media (max-width: 768px) {
        flex-direction: column; /* Empilha os itens em telas menores */
        padding: 10px 20px;
        min-height: auto; /* Remove altura mínima fixa em mobile para ser mais flexível */
    }
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px; /* Aumentado o espaçamento entre os itens do menu */

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px; /* Espaçamento menor em mobile */
        margin-top: 15px; /* Espaço entre o logo e os itens em mobile */
    }
`;

export const MenuBarLogoContainer = styled.div`
    display: flex; /* Adicionado flex para alinhar logo e texto */
    align-items: center; /* Alinha verticalmente no centro */
    font-size: 1.6rem; /* Ligeiramente aumentado o tamanho da fonte do nome */
    font-weight: bold;
    color: white;

    a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: cyan;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
        flex-direction: column; /* Empilha logo e nome em mobile */
        text-align: center;
    }
`;

export const MenuLogo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px; /* Espaço entre a foto e o nome */

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 10px; /* Espaço entre a foto e o nome em mobile */
    }
`;

export const ProfilePicture = styled.img`
    width: 50px; /* Tamanho da foto de perfil */
    height: 50px;
    border-radius: 50%; /* Torna a imagem redonda */
    object-fit: cover;
    border: 2px solid cyan; /* Borda de destaque */
    margin-right: 10px; /* Espaço entre a foto e o nome */

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 5px; /* Espaço em mobile */
    }
`;


export const MenuBarItem = styled.div`
    /* Removido margin-left fixo para usar gap no MenuItemsContainer */
`;

export const MenuLink = styled.a`
    position: relative;
    color: white;
    text-decoration: none;
    padding: 10px 15px; /* Aumentado o padding para maior área clicável */
    display: inline-block;
    transition: color 0.3s ease-in-out, font-size 0.2s ease; /* Adicionado transição para font-size */
    font-size: 1.1em; /* Tamanho da fonte dos links */
    font-weight: 500; /* Levemente mais robusto */

    &::before {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: cyan;
        transition: all 0.3s ease-in-out;
    }

    &:hover::before {
        width: 100%;
    }

    &:hover {
        color: cyan;
        font-size: 1.15em; /* Ligeiro aumento no tamanho da fonte no hover */
    }

    @media (max-width: 768px) {
        font-size: 1em;
        padding: 8px 10px;
    }
`;