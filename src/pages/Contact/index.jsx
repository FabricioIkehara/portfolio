// src/pages/Contact/index.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importar os Styled Components da página de contato
import {
    ContactContainer,
    PageTitle,
    ContactDescription,
    ContactForm,
    FormGroup,
    FormLabel,
    FormInput,
    FormTextarea,
    SubmitButton,
    SocialIconsContainer,
    SocialIcon,
    EmailText,
    FooterWrapper
} from './styles.js'; // Importando os styled components de styles.js

// Importação do MenuBar
import MenuBar from '../../components/MenuBar/menu-bar.jsx';

// Importe os ícones sociais com os nomes de arquivo corretos da sua pasta assets
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import whats from '../../assets/whats.png'; // Verifique se este nome está correto, era 'whats.png' antes
import github from '../../assets/github.png'; // Caminho corrigido para ../../assets/github.png

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '', // Campo de assunto opcional
        message: ''
    });
    const [formStatus, setFormStatus] = useState(''); // 'success', 'error', 'submitting'

    useEffect(() => {
        window.scrollTo(0, 0); // Rola para o topo ao carregar a página
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulação de envio de formulário
        console.log('Dados do formulário enviados:', formData);

        // Aqui você integraria com um serviço de backend como Formspree, Netlify Forms, ou sua própria API
        // Exemplo hipotético:
        /*
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setFormStatus('error');
        }
        */

        // Simulação de sucesso/erro após um pequeno atraso
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% de chance de sucesso
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else { // 10% de chance de erro
                setFormStatus('error');
            }
        }, 1500);
    };

    return (
        <ContactContainer>
            <MenuBar /> {/* Garante que o menu esteja presente */}
            <PageTitle>Contato</PageTitle>
            <ContactDescription>
                Interessado em colaborar, tem uma ideia para um projeto, ou apenas quer dizer olá? Preencha o formulário abaixo e entrarei em contato o mais breve possível!
            </ContactDescription>

            <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel htmlFor="name">Nome:</FormLabel>
                    <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu.email@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="subject">Assunto:</FormLabel>
                    <FormInput
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem (opcional)"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="message">Mensagem:</FormLabel>
                    <FormTextarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        placeholder="Escreva sua mensagem aqui..."
                    />
                </FormGroup>
                <SubmitButton type="submit" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                </SubmitButton>

                {formStatus === 'success' && <p style={{ color: '#00DDEB', textAlign: 'center', marginTop: '20px' }}>Mensagem enviada com sucesso! Obrigado.</p>}
                {formStatus === 'error' && <p style={{ color: '#ff6b6b', textAlign: 'center', marginTop: '20px' }}>Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.</p>}
            </ContactForm>

            <ContactDescription style={{ marginTop: '50px' }}>
                Ou, encontre-me nas minhas redes sociais:
            </ContactDescription>
            <SocialIconsContainer>
                <SocialIcon href="https://www.instagram.com/fahhiroshi/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/fabricioikeharainamine/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </SocialIcon>
                <SocialIcon href="https://wa.me/+5511952115379" target="_blank" rel="noopener noreferrer">
                    <img src={whats} alt="WhatsApp" />
                </SocialIcon>
                <SocialIcon href="https://github.com/FabricioIkehara" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </SocialIcon>
            </SocialIconsContainer>
            
            <EmailText>
                Email: <a href="mailto:fah.hiroshi@gmail.com">fah.hiroshi@gmail.com</a>
            </EmailText>

            <FooterWrapper>
                <p>Developed by Fabrício Ikehara Inamine</p>
            </FooterWrapper>
        </ContactContainer>
    );
};

export default Contact;