import {
  AboutContainer,
  BackgroundImage,
  AboutTitle,
  AboutContent,
  AboutPhoto,
  AboutText,
  HomeButton,
} from './styles';
import oceanAbout from '../../assets/Oceanabout.jpg';
import aboutPhotoContent from '../../assets/c3.png';

const About = () => {
  return (
    <AboutContainer>
      <BackgroundImage src={oceanAbout} alt="Background" />
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutPhoto src={aboutPhotoContent} alt="About Me" />
        <AboutText>
          <p>
            Hello! I'm a Computer Engineering student at UNIVESP, a public university of São Paulo State.
            I have been working in web development for two years now.
            While I have experience in back-end projects, I find myself more at ease with front-end development.
            I enjoy crafting user-friendly interfaces and bringing innovative ideas to life.
            At my current company, RUOK Digital Marketing, I create websites for clients and participate in projects
            involving Google Tag Manager and the installation of tracking for Google Ads, Google Analytics, and Meta Ads,
            both server-side and web.
          </p>
        </AboutText>
      </AboutContent>
      {/* Botão Home */}
      <HomeButton to="/">Home</HomeButton>
    </AboutContainer>
  );
};

export default About;