import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import skyImage from './assets/sky.jpg';
import skyOceanImage from './assets/sky-ocean.jpg';
import oceanImage from './assets/ocean.jpg';
import oceanFloorImage from './assets/ocean-floor.jpg';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';
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
import Projects from './pages/Projects/index.js';
import About from './pages/About/index.js';

import insta from './assets/insta.png';
import linkedin from './assets/linkedin.png';
import whats from './assets/whats.png';
import github from './assets/github.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
`;

const Header = styled.header.attrs(() => ({
  className: 'header',
}))`
  background-image: url(${skyImage});
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1.attrs(() => ({
  className: 'title',
}))``;

const Subtitle = styled.h2.attrs(() => ({
  className: 'subtitle',
}))``;

const AboutMe = styled.div.attrs(() => ({
  className: 'about-me',
}))``;

const StacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-left: 40px; 
`;

const StackLogo = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const CustomCarousel = styled.div.attrs(() => ({
  className: 'custom-carousel',
}))``;

const Section = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  color: white;
`;

const SkyOceanSection = styled(Section)`
  background-image: url(${skyOceanImage});
  text-align: left;
`;

const OceanSection = styled(Section)`
  background-image: url(${oceanImage});
`;

const OceanFloorSection = styled(Section)`
  background-image: url(${oceanFloorImage});
`;

const Content = styled.div`
  max-width: 800px;
`;

const RightContainer = styled.div.attrs(() => ({
  className: 'right-container',
}))`
  margin-top: 20px;
  text-align: center;
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

  // Adicionando o useEffect para o botão "voltar ao topo"
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
      <Header>
        <TitleContainer>
          <Title>Fabrício Ikehara Inamine</Title>
          <Subtitle>Full-Stack Developer</Subtitle>
          <AboutMe>
            About Me<br />
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
        <CustomCarousel id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="c1" />
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="c2" />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="c3" />
            </div>
            <div className="carousel-item">
              <img src={c4} className="d-block w-100" alt="c4" />
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
            <a href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://wa.me/seuwhatsapp" target="_blank" rel="noopener noreferrer">
              <img src={whats} alt="WhatsApp" />
            </a>
            <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer">
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
}

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