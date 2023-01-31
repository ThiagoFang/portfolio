import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  padding: 3.2rem 1.6rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary-background);
  z-index: 9999999;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--main-color);
  font-size: var(--h1-font-size);
  cursor: pointer;
`;

export const NavArea = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  gap: 2.4rem;
  align-items: center;

  #settingsIcon {
    display: flex;
  }
`;

export const NavItem = styled.li`
  color: var(--text-color);
  font-size: var(--h2-font-size);
  color: var(--text-light);
  font-weight: 600;

  &.selected {
    color: var(--text-color);
  }
  &#settingsIcon {
    color: var(--main-color);
    font-weight: 500;
  }
`;
