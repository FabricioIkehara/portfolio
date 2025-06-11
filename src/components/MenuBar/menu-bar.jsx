import React from 'react'; // Importar React para JSX
import { Link } from 'react-router-dom'; // Importar Link do react-router-dom

import {
    MenuBarContainer,
    MenuBarLogoContainer,
    MenuLogo,
    MenuItemsContainer,
    MenuBarItem,
    MenuLink, // Manter MenuLink aqui, mas ele será um styled(Link)
    ProfilePicture
} from "./menu-bar.js";


const MenuBar = () => {
    return (
        <MenuBarContainer>
            <MenuBarLogoContainer>
                <MenuLogo>
                   
                    <MenuLink as={Link} to="/about">Fabrício Ikehara Inamine</MenuLink>
                </MenuLogo>
            </MenuBarLogoContainer>

            <MenuItemsContainer>
                <MenuBarItem>
                    <MenuLink as={Link} to="/">Home</MenuLink>
                </MenuBarItem>
                <MenuBarItem>
                    <MenuLink as={Link} to="/projects">Projects</MenuLink>
                </MenuBarItem>
                <MenuBarItem>
                    {/* NOVO: Usar Link do react-router-dom para navegar para a Home e incluir a âncora */}
                    <MenuLink as={Link} to="/#contact-section">Contact</MenuLink>
                </MenuBarItem>
            </MenuItemsContainer>
        </MenuBarContainer>
    );
};

export default MenuBar;
