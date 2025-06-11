import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Importando os Styled Components do arquivo About.js
import {
    AboutContainer,
    AboutTitle,
    AboutContent,
    AboutImage
} from './styles.js'; // Caminho para os Styled Components no mesmo diretório

// Importação do MenuBar, assumindo src/components/MenuBar/menu-bar.jsx
import MenuBar from '../../components/MenuBar/menu-bar.jsx'; 

// Importar a sua foto para a página About
import profilePhoto from '../../assets/c1.png'; // SUBSTITUA PELO CAMINHO DA SUA FOTO REAL

const About = () => {
    useEffect(() => {
        // Rolar para o topo ao carregar a página
        window.scrollTo(0, 0);
    }, []);

    // Se houver lógica de navegação, use o useNavigate aqui
    const navigate = useNavigate();

    return (
        <AboutContainer>
            <MenuBar /> {/* Este MenuBar deve ser o mesmo importado acima */}

            <AboutTitle>Sobre Mim</AboutTitle>
            
            {/* Sua foto adicionada aqui */}
            <AboutImage src={profilePhoto} alt="Foto de Fabrício Ikehara Inamine" />

            <AboutContent>
                Olá! Sou Fabrício, um Full Stack Developer com paixão por criar experiências web incríveis. Minha jornada no desenvolvimento me levou a focar no Front-End, onde adoro transformar ideias em interfaces de usuário interativas e responsivas.
            </AboutContent>
            <AboutContent>
                Domino HTML, CSS, JavaScript, e frameworks modernos como React e Angular. No lado do Back-End, trabalho com PHP, Python (especialmente Django) e Java, lidando com bancos de dados como MongoDB e MySQL. Minha especialidade também inclui a integração e consumo de APIs para garantir que tudo funcione perfeitamente.
            </AboutContent>
            <AboutContent>
                Estou sempre em busca de novos desafios e oportunidades para aprender e crescer. Se você tem um projeto em mente ou gostaria de colaborar, sinta-se à vontade para entrar em contato!
            </AboutContent>
            {/* Exemplo de botão de volta para Home, se necessário */}
            {/* <button onClick={() => navigate('/')}>Voltar para Home</button> */}
        </AboutContainer>
    );
};

export default About;
