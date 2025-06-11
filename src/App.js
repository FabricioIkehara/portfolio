import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // Mantenha seu CSS original se tiver outros estilos importantes aqui
import MenuBar from './components/menu-bar.jsx';

// Importe suas imagens do carrossel aqui. Certifique-se de que são quadradas ou serão cortadas.
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';

// Importe os logos das tecnologias
import htmlLogo from './assets/html-logo.png';
import cssLogo from './assets/css-logo.png';
import jsLogo from './assets/js-logo.png';
import reactLogo from './assets/react-logo.png';
import angularLogo from './assets/angular-logo.png';
import phpLogo from './assets/php-logo.png';
import pythonLogo from './assets/python-logo.png';
import javaLogo from './assets/java-logo.png';
import mongodbLogo from './assets/mongodb-logo.png';
import mysqlLogo from './assets/mysql-logo.png';

// Importe as páginas e ícones sociais
import Projects from './pages/Projects/index.js';
import About from './pages/About/index.js';
import insta from './assets/insta.png';
import linkedin from './assets/linkedin.png';
import whats from './assets/whats.png';
import github from './assets/github.png';

// Estilos globais para a aplicação
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif; /* Usando a fonte importada */
    }

    /* Estilos para os botões do OceanSection */
    .custom-button, .aboutMebutton {
        background-color: #007bff; /* Azul primário */
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 8px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: #0056b3; /* Azul mais escuro no hover */
            transform: translateY(-3px);
        }

        &:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    }

    /* Estilos para os ícones sociais */
    .social-icons {
        display: flex;
        gap: 20px;
        margin-top: 30px;
    }

    .social-icons img {
        width: 50px;
        height: 50px;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    /* Estilos para o botão Back to Top */
    #back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.2s ease;
        z-index: 1000;

        &:hover {
            background-color: #0056b3;
            transform: translateY(-3px);
        }
    }

    /* Estilos para o container de seção no OceanSection */
    .section-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }

    .left-section, .right-section {
        flex: 1;
        text-align: center;

        h2 {
            font-size: 2em;
            margin-bottom: 20px;
        }
    }

    /* Estilos para email e créditos */
    .email, .credits {
        margin-top: 20px;
        font-size: 0.9em;
        color: #cccccc;
        text-align: center;
    }

    .email a, .credits a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

// O Header agora se concentra em ser o container principal da primeira tela
const Header = styled.header.attrs(() => ({
    className: 'header',
}))`
    /* Revertido o gradiente para o background do Header */
    background: linear-gradient(to bottom, #000000 0%, #001a33 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Centraliza o HeroContentContainer verticalmente */
    color: white;
    position: relative;
    padding: 20px;
    overflow: hidden;
    margin-bottom: 0;
    padding-bottom: 0;
`;

// Novo container para o conteúdo principal da "hero section" (texto + carrossel)
const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column; /* Padrão: empilha em telas menores */
    align-items: center; /* Centraliza em telas menores */
    width: 100%;
    max-width: 1200px; /* Limita a largura máxima do conteúdo */
    padding: 20px; /* Espaçamento interno */
    box-sizing: border-box; /* Inclui padding na largura */
    
    /* Media query para desktop */
    @media (min-width: 992px) { /* Exemplo: telas maiores que 992px (lg) */
        flex-direction: row; /* Layout em linha (duas colunas) */
        justify-content: space-between; /* Espaço entre as colunas */
        align-items: center; /* Alinha verticalmente os itens no centro */
    }
`;

// TitleContainer ajustado para o novo layout flex
const TitleContainer = styled.div`
    /* Removido position: absolute para integrar no flexbox */
    /* Mantém alinhamento à esquerda para desktop, centraliza para mobile */
    flex: 1; /* Permite que ocupe o espaço disponível */
    padding: 20px; /* Espaçamento interno */
    text-align: center; /* Centraliza texto em mobile */
    margin-bottom: 40px; /* Espaço entre texto e carrossel em mobile */

    @media (min-width: 992px) {
        text-align: left; /* Alinha à esquerda em desktop */
        padding-right: 40px; /* Espaço à direita do texto */
        margin-bottom: 0; /* Remove margem inferior quando lado a lado */
        max-width: 60%; /* Ocupa uma parte da largura */
    }
`;

const Title = styled.h1.attrs(() => ({
    className: 'title',
}))`
    font-size: 3em;
    margin-bottom: 10px;
    font-weight: 700; /* Robusto */
    color: white; /* Cor padrão */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para destaque */

    @media (max-width: 768px) {
        font-size: 2.2em;
    }
`;

const Subtitle = styled.h2.attrs(() => ({
    className: 'subtitle',
}))`
    font-size: 1.8em;
    color: #007bff; /* Azul de destaque */
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.4em;
    }
`;

const AboutMe = styled.div.attrs(() => ({
    className: 'about-me',
}))`
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 700px; /* Limita a largura do texto para melhor leitura */
    margin-left: auto; /* Centraliza o bloco de texto quando a largura é limitada */
    margin-right: auto;

    @media (min-width: 992px) {
        margin-left: 0; /* Remove centralização em desktop */
        margin-right: 0;
    }
`;

const StacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Permite quebrar em várias linhas */
    gap: 15px; /* Espaçamento entre os logos */
    margin-top: 20px;
    justify-content: center; /* Centraliza os logos em mobile */

    @media (min-width: 992px) {
        justify-content: flex-start; /* Alinha os logos à esquerda em desktop */
        margin-left: 0; /* Removido o margin-left fixo para alinhar com o texto */
    }
`;

const StackLogo = styled.img`
    width: 60px; /* Tamanho dos logos aumentado para melhor visualização */
    height: 60px;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
    filter: grayscale(100%); /* Deixa os logos em escala de cinza */
    opacity: 0.7; /* Menos intenso */

    &:hover {
        transform: scale(1.2);
        filter: grayscale(0%); /* Colore no hover */
        opacity: 1; /* Mais intenso no hover */
    }
`;

const CustomCarousel = styled.div.attrs(() => ({
    className: 'custom-carousel',
}))`
    flex: 1; /* Permite que ocupe o espaço disponível */
    max-width: 100%; /* Garante que não ultrapasse o container pai */
    
    .carousel-item img {
        border-radius: 12px; /* Cantos mais arredondados */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Sombra mais pronunciada */
        aspect-ratio: 1 / 1; /* Garante que a imagem seja quadrada */
        object-fit: cover; /* Recorta a imagem para preencher o espaço mantendo a proporção */
        border: 2px solid #007bff; /* Borda sutil para as imagens */
    }

    /* Estilos para os botões de navegação do carrossel */
    .carousel-control-prev,
    .carousel-control-next {
        width: 15%; /* Aumenta a área clicável das setas */
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        filter: invert(100%); /* Torna as setas brancas para fundo escuro */
        font-size: 2em; /* Aumenta o tamanho das setas */
    }

    @media (min-width: 992px) {
        max-width: 40%; /* Ocupa uma parte da largura em desktop */
    }
`;

const Section = styled.section`
    min-height: 100vh;
    padding: 80px 20px; /* Mais padding superior e inferior */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center; /* Centraliza a imagem de fundo */
    background-attachment: fixed;
    color: white;
    text-align: center; /* Centraliza o texto nas seções */

    h2 {
        font-size: 2.5em;
        margin-bottom: 30px;
        color: #007bff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 1.1em;
        line-height: 1.7;
        max-width: 800px;
        margin: 0 auto 20px auto;
    }
`;

const SkyOceanSection = styled(Section)`
    /* Mantido o gradiente original para esta seção */
    background: linear-gradient(to bottom, #001a33 0%, #003366 100%);
`;

const OceanSection = styled(Section)`
    /* Mantido o gradiente original para esta seção */
    background: linear-gradient(to bottom, #003366, #0056b3);
`;

const OceanFloorSection = styled(Section)`
    /* Mantido o gradiente original para esta seção */
    background: linear-gradient(to bottom, #0056b3, #66b2ff);
`;

const Content = styled.div`
    max-width: 800px;
    width: 100%;
    margin-bottom: 40px; /* Espaço abaixo do conteúdo */
`;

const RightContainer = styled.div.attrs(() => ({
    className: 'right-container',
}))`
    margin-top: 20px;
    text-align: center;
    h3 {
        font-size: 1.8em;
        color: #007bff;
        margin-bottom: 15px;
    }
`;

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const sections = document.querySelectorAll("section, .header");
        let currentSection = 0;
        let isScrolling = false;

        function handleScroll(event) {
            if (isScrolling) return;
            isScrolling = true;

            const direction = event.deltaY > 0 ? 1 : -1;
            currentSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
            sections[currentSection].scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                isScrolling = false;
            }, 800); 
        }

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }, []);

    return (
        <div className="App">
            <GlobalStyle />
            <MenuBar />
            <Header>
                {/* HeroContentContainer engloba o texto e o carrossel para o layout responsivo */}
                <HeroContentContainer>
                    <TitleContainer>
                        <Title>Fabrício Ikehara Inamine</Title> {/* Adicionado o nome aqui */}
                        <Subtitle>Full-Stack Developer</Subtitle>
                        <AboutMe>
                            Hi! I’m Fabrício, a Full Stack Developer with a strong focus on Front-End development. I specialize in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React, and Angular, while also handling back-end tasks with PHP, Python and a little Bit of Java. Databases like MongoDB and MySQL.
                        </AboutMe>
                        <StacksContainer>
                            <StackLogo src={htmlLogo} alt="HTML" />
                            <StackLogo src={cssLogo} alt="CSS" />
                            <StackLogo src={jsLogo} alt="JavaScript" />
                            <StackLogo src={reactLogo} alt="React" />
                            <StackLogo src={angularLogo} alt="Angular" />
                            <StackLogo src={phpLogo} alt="PHP" />
                            <StackLogo src={pythonLogo} alt="Python" />
                            <StackLogo src={javaLogo} alt="Java" />
                            <StackLogo src={mongodbLogo} alt="MongoDB" />
                            <StackLogo src={mysqlLogo} alt="MySQL" />
                        </StacksContainer>
                    </TitleContainer>

                    <CustomCarousel id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"> {/* data-bs-interval ajustado para 5000ms (5 segundos) */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={c1} className="d-block w-100" alt="Sua foto 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={c2} className="d-block w-100" alt="Sua foto 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={c3} className="d-block w-100" alt="Sua foto 3" />
                            </div>
                            <div className="carousel-item">
                                <img src={c4} className="d-block w-100" alt="Sua foto 4" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </CustomCarousel>
                </HeroContentContainer>
            </Header>

            <SkyOceanSection>
                <h2>What I Do</h2>
                <Content>
                    <p>
                        I develop complete web applications, focusing on creating clean, interactive user interfaces and building solid back-end systems. I also specialize in integrating and consuming APIs to ensure seamless communication between the front-end and back-end. While I'm skilled in both front-end and back-end, my passion lies in designing engaging, user-centered experiences.
                    </p>
                </Content>
                <RightContainer>
                    <h3>Let’s Build Together!</h3>
                    <p>
                        Looking for a Full Stack Developer with a front-end focus and API integration expertise? Let’s connect and create something amazing!
                    </p>
                </RightContainer>
            </SkyOceanSection>

            <OceanSection>
                <div className="section-container">
                    <div className="left-section">
                        <h2>My Projects</h2>
                        <button
                            className="custom-button" 
                            onClick={() => navigate('/projects')}
                        >
                            Projects
                        </button>
                    </div>
                    <div className="right-section">
                        <h2>About Me</h2>
                        <button
                            className="aboutMebutton"
                            onClick={() => navigate('/about')}
                        >
                            About Me
                        </button>
                    </div>
                </div>
            </OceanSection>

            <OceanFloorSection>
                <h2>Contact</h2>
                <p>Thank you so much for taking the time to read through my portfolio! Until the next wave! 🌊😊</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/fahhiroshi/" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/fabricioikeharainamine/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://wa.me/+5511952115379" target="_blank" rel="noopener noreferrer">
                        <img src={whats} alt="WhatsApp" />
                    </a>
                    <a href="https://github.com/FabricioIkehara" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                    </a>
                </div>
                <div className="email">
                    <p>Email: <a href="mailto:fah.hiroshi@gmail.com">fah.hiroshi@gmail.com</a></p>
                </div>
                <div className="credits">
                    <p>Developed by <a href="https://github.com/fabricioikehara" target="_blank">@Fabricio Ikehara Inamine</a></p>
                </div>
                <button id="back-to-top" title="Voltar ao topo">↑</button>
            </OceanFloorSection>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
