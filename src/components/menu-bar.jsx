// menu-bar.jsx
import {
  MenuBarContainer,
  MenuBarLogoContainer,
  MenuLogo,
  MenuBarItem,
  MenuItemsContainer,
  MenuLink
} from "./menu-bar";

const MenuBar = () => {
  return (
    <MenuBarContainer>
      <MenuBarLogoContainer>
        <MenuLogo>
          <a href="#about">Fabrício Ikehara Inamine</a>
        </MenuLogo>
      </MenuBarLogoContainer>

      <MenuItemsContainer>
        <MenuBarItem>
          <MenuLink href="/">Home</MenuLink>
        </MenuBarItem>
        <MenuBarItem>
          <MenuLink href="#projects">Projects</MenuLink>
        </MenuBarItem>
        <MenuBarItem>
          <MenuLink href="#contact">Contact</MenuLink>
        </MenuBarItem>
      </MenuItemsContainer>
    </MenuBarContainer>
  );
};

export default MenuBar;
