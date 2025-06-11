import styled from "styled-components";

export const MenuBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(0, 0, 0, 0.99);
  padding: 10px 30px;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const MenuBarLogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: cyan;
    }
  }
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBarItem = styled.div`
  margin-left: 20px;
`;

export const MenuLink = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  display: inline-block;
  transition: color 0.3s ease-in-out;

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
  }
`;
