import styled from 'styled-components';
import './App.css';
import skyImage from './assets/sky.jpg'; // Imagem do céu
import skyOceanImage from './assets/sky-ocean.jpg'; // Imagem do céu tocando o oceano
import oceanImage from './assets/ocean.jpg'; // Imagem do oceano
import oceanFloorImage from './assets/ocean-floor.jpg'; // Imagem do fundo do oceano
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';
// Importe os logos das stacks
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

// Importar a fonte do Google Fonts
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';

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
  margin-left: 40px; /* Ajusta a posição para a direita */
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

const ProjectsButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-family: 'Luckiest Guy', serif;
  font-size: 24px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
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

function App() {
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
      }, 800); // Duração da rolagem suave
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
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
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
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
  <h2>My Projects</h2>
  <button className="custom-button" onClick={() => console.log('Redirecionando...')}>
    <div className="left"></div>
    Projects
    <div className="right"></div>
  </button>
</OceanSection>
    <OceanFloorSection>
        <h2>Ocean Floor</h2>
        <p>This is the ocean floor section.</p>
      </OceanFloorSection>
    </div>
  );
}

export default App;
