import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 100px; /* Para acomodar a barra de menu fixa */
    min-height: 100vh;
    background: linear-gradient(to bottom, #000000 0%, #001a33 100%); /* Gradiente da Home */
    color: white;
    position: relative;
    z-index: 1;
    box-sizing: border-box; /* Inclui padding na altura/largura total */
    text-align: center; /* Centraliza o texto por padrão */
`;

export const PageTitle = styled.h1`
    font-family: 'Luckiest Guy', serif;
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    transition: all 0.4s ease;

    @media (max-width: 768px) {
        font-size: 2.8rem;
    }
`;

export const ContactDescription = styled.p`
    font-size: 1.1em;
    line-height: 1.6;
    max-width: 700px;
    margin-bottom: 40px;
    color: #e0e0e0;

    @media (max-width: 768px) {
        font-size: 1em;
        padding: 0 15px;
    }
`;

export const ContactForm = styled.form`
    background-color: rgba(30, 26, 37, 0.7); /* Fundo sutil para o formulário */
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    width: 100%;
    max-width: 600px; /* Largura máxima do formulário */
    display: flex;
    flex-direction: column;
    gap: 20px; /* Espaçamento entre os campos */
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box; /* Garante que o padding não adicione à largura */

    @media (max-width: 600px) {
        padding: 25px;
        max-width: 95%;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left; /* Alinha labels à esquerda */
`;

export const FormLabel = styled.label`
    font-size: 1em;
    margin-bottom: 8px;
    color: #00DDEB; /* Cor de destaque para labels */
    font-weight: bold;
`;

export const FormInput = styled.input`
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05); /* Fundo quase transparente */
    color: white;
    font-size: 1em;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #007bff; /* Borda azul no foco */
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3); /* Sombra suave no foco */
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const FormTextarea = styled.textarea`
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1em;
    outline: none;
    resize: vertical; /* Permite redimensionar verticalmente */
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const SubmitButton = styled.button`
    background-color: #007bff; /* Azul primário */
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    align-self: center; /* Centraliza o botão no formulário */
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
    }
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px; /* Espaçamento entre os ícones */
    margin-top: 40px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        gap: 20px;
    }
`;

export const SocialIcon = styled.a`
    img {
        width: 60px; /* Tamanho um pouco maior para os ícones */
        height: 60px;
        transition: transform 0.3s ease, filter 0.3s ease;
        filter: grayscale(80%); /* Deixa os ícones mais sutis */
        opacity: 0.8;

        &:hover {
            transform: scale(1.2);
            filter: grayscale(0%); /* Colore no hover */
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export const EmailText = styled.p`
    font-size: 1.1em;
    color: #e0e0e0;
    margin-top: 10px;
    margin-bottom: 30px;

    a {
        color: #00DDEB; /* Cor de destaque para o email */
        text-decoration: none;
        font-weight: bold;
        transition: text-decoration 0.2s ease;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FooterWrapper = styled.div`
    margin-top: auto; /* Empurra o rodapé para o final da página */
    padding-top: 20px;
    font-size: 0.9em;
    color: #ccc;
    text-align: center;

    a {
        color: #007bff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;
